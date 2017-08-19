<?php

namespace App\Listeners;

use App\Events\VenueSaved;
use App\Models\Review;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SaveReviewsVenue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  VenueSaved  $event
     * @return void
     */
    public function handle(VenueSaved $event)
    {
//        $venue = $event->venue;
//        $key = $event->key.'_reviews';
//        if(!empty(session($key))) {
//            $reviews = collect(session($key))->map(function($item){
//                return new Review($item);
//            });
//            $venue->reviews()->saveMany($reviews);
//        }
    }
}
