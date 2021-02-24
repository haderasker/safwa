<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Lesson extends Model
{
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
}

