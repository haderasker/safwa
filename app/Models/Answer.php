<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Answer extends Model
{
    use SoftDeletes;

    protected $connection = 'mysql';

    protected $table = 'answers';

    protected $fillable = [
        'question_id',
        'label',
        'is_correct'
    ];

}

