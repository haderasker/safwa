<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doctrine extends Model
{
    protected $connection = 'mysql';

    protected $table='doctrines';
}
