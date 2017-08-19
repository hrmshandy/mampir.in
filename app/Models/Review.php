<?php

namespace App\Models;

use App\Events\ReviewSaved;
use App\Events\ReviewSaving;

class Review extends Model
{
    use Concerns\HasPhotos,
        Concerns\HasUser,
        Concerns\HasVenue,
        Getters\ReviewGetters;


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'user_id', 'venue_id', 'status'
    ];

    /**
     * The relations to eager load on every query.
     *
     * @var array
     */
    protected $with = ['user', 'photos'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'photos'
    ];

    protected $guarded = ['imageCollection'];

    public $imageCollection;

    /**
     * The event map for the model.
     *
     * @var array
     */
    protected $events = [
        'saving' => ReviewSaving::class,
        'saved' => ReviewSaved::class
    ];
}
