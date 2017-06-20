<?php

namespace App\Models;

use App\Events\ReviewSaving;

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

    /**
     * The event map for the model.
     *
     * @var array
     */
    protected $events = [
        'saving' => ReviewSaving::class
    ];
}
