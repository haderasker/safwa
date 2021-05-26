<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserLesson extends Model
{
    protected $connection = 'mysql';

    protected $table = 'users_lessons';

    protected $fillable = [
        'user_id',
        'lesson_id'
    ];
}

