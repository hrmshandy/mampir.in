<?php

namespace App\Listeners;

use App\Events\VenueSaved;
use App\Models\VenueDetail;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SaveDetailVenue
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
        $venue = $event->venue;
        $key = $event->key.'_details';
        if(!empty(session($key))) {
            $venue->details()->save(new VenueDetail(session($key)));
            session()->forget($key);
        }
    }
}
