<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AcademicYear extends Model
{
    protected $table = 'academic_years';

    protected $fillable = [
        'name',
        'first_term_from',
        'first_term_to',
        'second_term_from',
        'second_term_to',
    ];

}

