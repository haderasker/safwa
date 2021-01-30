<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AcademicYear extends Model
{
    protected $table = 'academic_years';

    protected $fillable = [
        'label',
        'current'
    ];

    /**
     * @return HasMany
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function semesters(): HasMany
    {
        return $this->hasMany(Semester::class, 'academic_year_id', 'id');
    }

}

