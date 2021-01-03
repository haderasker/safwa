<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SemesterLevelCourse extends Model
{
    protected $table = 'semester_level_course';

    protected $fillable = [
        'semester_id',
        'level_id',
        'course_ids',
    ];
}

