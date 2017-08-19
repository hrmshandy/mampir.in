<?php

namespace App\Models\Getters;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

trait VenueGetters
{
    public function getRatingAttribute()
    {
        $rating = $this->reviews
                    ->filter(function($item){
                        return $item->rating > 0;
                    })->avg('rating');

        return round($rating, 1);
    }

    public function getRatingsAttribute()
    {
        $ratings = [
            5 => 0,
            4 => 0,
            3 => 0,
            2 => 0,
            1 => 0
        ];

        $this->reviews()
            ->select('rating', DB::raw('COUNT(*) as reviews'))
            ->groupBy('rating')
            ->orderBy('rating', 'desc')
            ->get()
            ->filter(function($item){
                return $item->rating > 0;
            })
            ->map(function($item) use(&$ratings){
                $ratings[$item->rating] = $item->reviews;
            });
        return $ratings;
    }

    public function getCoverAttribute()
    {
        $photos = $this->photos()->get();
        if(count($photos) > 0) {
            return url('img/cache/card/'.$photos[0]->filename);
        }
        return null;
    }

    public function getPhotosAttribute()
    {
        return $this->photos()->get()->map(function($item){
            return url('/storage/images/places/'.$item->filename);
        });
    }

    public function getTotalReviewsAttribute()
    {
        return count($this->reviews()->get());
    }

    public function getShortAddressAttribute()
    {
        return explode(',', $this->address)[0];
    }
}
