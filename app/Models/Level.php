<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Level extends Model
{
    protected $connection = 'mysql';

    protected $table = 'levels';

    protected $fillable = [
        'name'
    ];

    /**
     * @return BelongsToMany
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function courses(): BelongsToMany
    {
        return $this->belongsToMany(Course::class, 'semester_level_course', 'level_id', 'course_id', 'id', 'id');
    }
}

