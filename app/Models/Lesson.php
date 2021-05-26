<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;


class Lesson extends Model implements HasMedia
{
    use SoftDeletes, HasMediaTrait;

    protected $connection = 'mysql';

    protected $table = 'lessons';

    protected $fillable = [
        'course_id',
        'label',
        'youtube',
        'soundcloud',
        'pdf',
        'published_at',
    ];

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class, 'course_id', 'id');
    }

    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable')->whereNull('parent_id');
    }

    /**
     * @return MorphOne
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function quiz(): MorphOne
    {
        return $this->morphOne(Exam::class, 'testable', 'testable_type', 'testable_id', 'id');
    }

    public function studentQuiz(): HasManyThrough
    {
        return $this->hasManyThrough(
            StudentExam::class,
            Exam::class,
            'testable_id',
            'exam_id',
            'id',
            'id'
        );
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('images')->useDisk('custom')->singleFile();
    }

    public function usersLessons(): HasMany
    {
        return $this->hasMany(UserLesson::class, 'lesson_id', 'id');
    }
}

