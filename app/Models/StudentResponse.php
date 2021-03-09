<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;


class StudentResponse extends Model
{
    use SoftDeletes;

    protected $connection = 'mysql';

    protected $table = 'students_responses';

    protected $fillable = [
        'student_id',
        'exam_id',
        'question_id',
        'answer_id'
    ];

    /**
     * @return BelongsTo
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function student(): BelongsTo
    {
        return $this->belongsTo(User::class, 'student_id', 'id');
    }

    /**
     * @return BelongsTo
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function exam(): BelongsTo
    {
        return $this->belongsTo(Exam::class, 'exam_id', 'id');
    }

    /**
     * @return BelongsTo
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function question(): BelongsTo
    {
        return $this->belongsTo(Question::class, 'question_id', 'id');
    }

    /**
     * @return BelongsTo
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function answer(): BelongsTo
    {
        return $this->belongsTo(Answer::class, 'answer_id', 'id');
    }
}

