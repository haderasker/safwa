<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class AcademicYear extends Model
{
    use SoftDeletes;

    protected $connection = 'mysql';

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

