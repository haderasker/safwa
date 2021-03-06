<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class StudentExam extends Model
{
    use SoftDeletes;

    protected $connection = 'mysql';

    protected $table = 'students_exams';

    protected $fillable = [
        'student_id',
        'exam_id',
        'retries',
        'score',
        'extra',
        'passed',
        'is_submitted'
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

}

