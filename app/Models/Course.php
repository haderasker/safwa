<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Course extends Model
{
    protected $table = 'courses';

    /**
     * @var string[]
     */
    protected $fillable = [
        'name',
        'doctrine',
        'teacher_id',
        'description',
//        'max_score',
//        'min_score'
    ];

    /**
     * @return BelongsTo
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function teacher(): BelongsTo
    {
        return $this->belongsTo(User::class, 'teacher_id', 'id');
    }

    /**
     * @return MorphMany
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function exams(): MorphMany
    {
        return $this->morphMany(Exam::class, 'testable', 'testable_type', 'testable_id', 'id');
    }

    /**
     * @return HasMany
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function lessons(): HasMany
    {
        return $this->hasMany(Lesson::class, 'course_id', 'id');
    }
}
