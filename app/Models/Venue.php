<?php

namespace App\Models;

use App\Events\VenueSaved;
use App\Events\VenueSaving;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Venue extends Model
{
    use HasSlug,
        Concerns\HasPhotos,
        Concerns\HasCategories,
        Getters\VenueGetters,
        Relations\VenueRelations,
        Setters\VenueSetters;

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

    /**
     * The event map for the model.
     *
     * @var array
     */
    protected $events = [
        'saving' => VenueSaving::class,
        'saved' => VenueSaved::class,
    ];

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

}
