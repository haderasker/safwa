<?php

namespace App\Models;

use App\Notifications\ResetPasswordNotification;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;

class User extends Authenticatable implements HasMedia
{
    use Notifiable, HasRoles, HasMediaTrait;

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
        'upload_lessons'
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

}
