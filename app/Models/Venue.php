<?php

namespace App\Models;

class Venue extends Model
{
    use Concerns\HasPhotos,
        Concerns\HasCategories,
        Getters\VenueGetters,
        Relations\VenueRelations;

    protected $hidden = [
        'featured', 'deleted_at'
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'rating', 'ratings', 'cover', 'photos', 'total_reviews'
    ];
}
