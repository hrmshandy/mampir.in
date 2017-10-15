<?php

namespace App\Models;

use Carbon\Carbon;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Discount extends Model
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

    /**
     * getter for date start
     *
     * @param $value
     * @return array
     */
    public function getDateStartAttribute($value)
    {
        return $this->getDayAndMonthOnly($value);
    }

    /**
     * setter for date start
     *
     * @param $value
     */
    public function setDateStartAttribute($value)
    {
        $this->attributes['date_start'] = $this->createFormattedDate($value);
    }

    /**
     * getter for date end
     *
     * @param $value
     * @return array
     */
    public function getDateEndAttribute($value)
    {
        return $this->getDayAndMonthOnly($value);
    }

    /**
     * setter for date end
     *
     * @param $value
     */
    public function setDateEndAttribute($value)
    {
        $this->attributes['date_end'] = $this->createFormattedDate($value);
    }

    protected function getDayAndMonthOnly($value)
    {
        $date = explode('-', $value);

        return ['day' => $date[2], 'month' => $date[1]];
    }

    /**
     * convert date to the appropriate mysql format
     *
     * @param $value
     * @return string
     */
    protected function createFormattedDate($value)
    {
        $date = $value;
        if(is_array($value))
            $date = Carbon::createFromDate(Carbon::now()->year, $value['month'], $value['day'])->format('Y-m-d');

        return $date;
    }
}
