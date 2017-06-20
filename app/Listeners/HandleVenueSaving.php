<?php

namespace App\Listeners;

use App\Events\VenueSaving;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class HandleVenueSaving
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
     * @param  VenueSaving  $event
     * @return void
     */
    public function handle(VenueSaving $event)
    {
        $key = $event->key;
        session([$key.'_details' => $event->venue->details]);
        session([$key.'_opening-hours' => $event->venue->opening_hours]);
        session([$key.'_photos' => $event->venue->place_photos]);
        session([$key.'_reviews' => $event->venue->place_reviews]);
        session([$key.'_categories' => [$event->venue->category]]);
        $event->venue->unset(['details', 'opening_hours', 'place_photos', 'place_reviews', 'category']);
    }
}
