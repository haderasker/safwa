<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\SoftDeletes;


class Course extends Model
{
    use SoftDeletes;

    protected $connection = 'mysql';

    protected $table = 'courses';

    /**
     * @var string[]
     */
    protected $fillable = [
        'name',
        'doctrine_id',
        'teacher_id',
        'description',
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

    /**
     * @return BelongsTo
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function doctrine(): BelongsTo
    {
        return $this->belongsTo(Doctrine::class, 'doctrine_id', 'id');
    }
}
