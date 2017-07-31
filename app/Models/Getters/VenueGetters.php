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
        $ratings = [];
        $reviews = $this->reviews()
                    ->select('rating', DB::raw('COUNT(*) as reviews'))
                    ->groupBy('rating')
                    ->orderBy('rating', 'desc')
                    ->get()
                    ->pluck('reviews', 'rating')
                    ->filter(function($value, $key){
                        return $key > 0;
                    })
                    ->all();

        for ($i = 4; $i >= 0; $i--) {
            $index = ($i + 1);
            $ratings[] = [
                "rating" => $index,
                "reviews" => isset($reviews[$index]) ? $reviews[$index] : 0
            ];
        }

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
            return $item->filename;
        });
    }

    public function getTotalReviewsAttribute()
    {
        return count($this->reviews()->get());
    }
}
