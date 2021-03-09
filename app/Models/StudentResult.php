<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class StudentResult extends Model
{
    use SoftDeletes;

    protected $connection = 'mysql';

    protected $table = 'students_results';

    protected $fillable = [
        'student_id',
        'level_id',
        'academic_year_id',
        'semester_one_score',
        'semester_two_score'
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
    public function level(): BelongsTo
    {
        return $this->belongsTo(Level::class, 'level_id', 'id');
    }

    /**
     * @return BelongsTo
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function academicYear(): BelongsTo
    {
        return $this->belongsTo(AcademicYear::class, 'academic_year_id', 'id');
    }
}

