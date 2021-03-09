<?php

namespace App\Models;

use App\Events\UserUpdatingEvent;
use App\Notifications\ResetPasswordNotification;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Traits\HasRoles;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable implements HasMedia
{
    use Notifiable, HasRoles, HasMediaTrait, SoftDeletes;

    protected $connection = 'mysql';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'academic_year_id',
        'level_id',
        'country',
        'doctrine_id',
        'gender',
        'national_number',
        'about_me',
        'phone',
        'birth_date',
        'nationality',
        'address',
        'language',
        'ar_level',
        'qualification',
        'job',
        'quran_level',
        'religion',
        'upload_lessons',
        'status'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The event map for the model.
     *
     * @var array
     */
    protected $dispatchesEvents = [
        'updating' => UserUpdatingEvent::class
    ];

    /**
     * @param string $token
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class, 'user_id', 'id');
    }

    public function courses(): BelongsToMany
    {
        return $this->belongsToMany(
            Course::class,
            'users_courses',
            'user_id',
            'course_id',
            'id',
            'id'
        )->using(UserCourse::class)->withPivot('type');
    }

    public function teacherCourses(): HasMany
    {
        return $this->hasMany(Course::class, 'teacher_id', 'id');
    }

    public function teacherLessons()
    {
        return $this->hasManyThrough(
            Lesson::class,
            Course::class,
            'teacher_id',
            'course_id',
            'id',
            'id'
        );
    }

    public function academicYear(): BelongsTo
    {
        return $this->belongsTo(AcademicYear::class, 'academic_year_id', 'id');
    }

    public function level(): BelongsTo
    {
        return $this->belongsTo(Level::class, 'level_id', 'id');
    }

    public function doctrine(): BelongsTo
    {
        return $this->belongsTo(Doctrine::class, 'doctrine_id', 'id');
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('images')->useDisk('custom')->singleFile();
    }

    /**
     * @param User $user
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public static function assignCourses(User $user)
    {
        $levelCoursesForCurrentYear = DB::select("
            select semester_level_course.course_ids
            from semester_level_course
            left join semesters on semester_level_course.semester_id = semesters.id
            left join levels on semester_level_course.level_id = levels.id
            left join academic_years on semesters.academic_year_id = academic_years.id
            where academic_years.current = 1
                and levels.id = " . $user->level_id . ";
        ");

        $levelCoursesForCurrentYear = array_reduce($levelCoursesForCurrentYear, function ($total, $item) {
            return array_merge($total, json_decode($item->course_ids));
        }, []);

        $levelCoursesForCurrentYear = array_values(array_unique($levelCoursesForCurrentYear));

        $courses = Course::whereIn('id', $levelCoursesForCurrentYear)->where(function ($query) use ($user) {
            $query->where('doctrine_id', $user->doctrine_id)
                ->orWhereNull('doctrine_id');
        })->pluck('id')->toArray();

        $user->courses()->attach($courses);
    }

}
