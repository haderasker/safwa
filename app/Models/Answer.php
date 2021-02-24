<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    protected $connection = 'mysql';

    protected $table = 'answers';

    protected $fillable = [
        'question_id',
        'label',
        'is_correct'
    ];

}

