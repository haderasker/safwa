<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Exam extends Model
{
    protected $table = 'exams';

    protected $fillable = [
        'testable_id',
        'testable_type',
        'label',
        'duration',
        'published_at',
        'ended_at',
        'level_id',
        'type'
    ];

    public function testable(): MorphTo
    {
        return $this->morphTo(__FUNCTION__, 'testable_type', 'testable_id', 'id');
    }

    public function questions(): HasMany
    {
        return $this->hasMany(Question::class, 'exam_id', 'id')->orderBy('order');
    }

    public function level(): BelongsTo
    {
        return $this->belongsTo(Level::class, 'level_id', 'id');
    }

    public function studentExam(): HasMany
    {
        return $this->hasMany(StudentExam::class, 'exam_id', 'testable_id');
    }
}

