<?php

namespace App\Models\Getters;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

trait VenueGetters
{
    public function getRatingAttribute()
    {
        return round($this->reviews->avg('rating'));
    }

    public function getRatingsAttribute()
    {
        return $this->reviews()
                    ->select('rating', DB::raw('COUNT(*) as reviews'))
                    ->groupBy('rating')
                    ->orderBy('rating', 'desc')->get();
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
        $photos = [];
        if(count($this->photos()->get()) > 0) {
            foreach($this->photos()->get() as $photo) {
                $photos[] = url('img/cache/original/'.$photo->filename);
            }
        }
        return $photos;
    }

    public function getTotalReviewsAttribute()
    {
        return count($this->reviews()->get());
    }
}
