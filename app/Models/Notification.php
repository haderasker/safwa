<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Notification extends Model
{
    protected $connection = 'mysql';

    protected $table = 'notifications';

    protected $fillable = [
        'user_id',
        'title',
        'body',
        'sent_at',
        'seen_at'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
