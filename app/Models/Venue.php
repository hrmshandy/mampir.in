<?php

namespace App\Models;

use App\Events\VenueSaved;
use App\Events\VenueSaving;
use Laravel\Scout\Searchable;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Venue extends Model
{
    use HasSlug,
        //Searchable,
        Concerns\HasPhotos,
        Concerns\HasCategories,
        Getters\VenueGetters,
        Relations\VenueRelations,
        Setters\VenueSetters;

    protected $hidden = [
        'featured', 'deleted_at', 'owner_id', 'city_id'
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
     * The relations to eager load on every query.
     *
     * @var array
     */
    protected $with = ['categories', 'city', 'city.province'];

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    /**
     * Get the indexable data array for the model.
     *
     * @return array
     */
//    public function toSearchableArray()
//    {
//        $array = $this->toArray();
//
//        $array['province'] = $array['city']['province']['name'];
//        $array['city'] = $array['city']['name'];
//        $array['categories'] = collect($array['categories'])->map(function($item){
//            $arr = [$item['name']];
//            if(isset($item['alias'])) $arr[] = $item['alias'];
//            return $arr;
//        })->all();
//
//        return $array;
//    }

}
