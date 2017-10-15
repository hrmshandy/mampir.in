<?php

namespace App\Models;


use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class BonusRule extends Model
{
    use HasSlug;

    /**
     * get venue relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function venue()
    {
        return $this->belongsTo(Venue::class);
    }

    /**
     * get bonus rule by venue
     *
     * @param $query
     * @return mixed
     */
    public function scopeByVenue($query)
    {
        return $query->where('venue_id', op()->venue_id);
    }

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

}
