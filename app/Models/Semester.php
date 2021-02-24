<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\DB;

class Semester extends Model
{
    protected $connection = 'mysql';

    protected $table = 'semesters';

    protected $fillable = [
        'label',
        'academic_year_id',
        'start',
        'end'
    ];

    protected $appends = ['levels'];

    /**
     * @return BelongsTo
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function academicYear(): BelongsTo
    {
        return $this->belongsTo(AcademicYear::class, 'academic_year_id', 'id');
    }

    /**
     * @return array
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function getLevelsAttribute(): array
    {
        $levels =  DB::select("
            select *
            from semester_level_course
            where semester_level_course.semester_id = " . $this->attributes['id'] . "
            order by level_id asc
        ");

        foreach ($levels as $level) {
            $level->course_ids = json_decode($level->course_ids, true);
        }

        return $levels;
    }
}

