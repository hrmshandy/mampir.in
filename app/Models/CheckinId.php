<?php

namespace App\Models;

class CheckinId extends Model
{
    protected $dates = ['expired_at'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getIdAttribute($value)
    {
        return str_pad($value, 4, '0', STR_PAD_LEFT);
    }
}
