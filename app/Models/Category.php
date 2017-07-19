<?php

namespace App\Models;

use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Category extends Model
{
    use Concerns\HasIcon;
    use HasSlug;

    /**
     * All of the relationships to be touched.
     *
     * @var array
     */
    protected $touches = ['venues'];

    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id', 'id');
    }

    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id', 'id');
    }

    /**
     * Get all of the posts that are assigned this tag.
     */
    public function venues()
    {
        return $this->morphedByMany(Venue::class, 'categorizable');
    }

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
