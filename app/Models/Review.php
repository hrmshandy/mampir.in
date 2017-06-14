<?php

namespace App\Models;

class Review extends Model
{
    use Concerns\HasPhotos,
        Concerns\HasUser,
        Concerns\HasVenue;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'user_id', 'venue_id', 'status'
    ];
}
