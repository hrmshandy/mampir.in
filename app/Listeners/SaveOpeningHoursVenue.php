<?php

namespace App\Listeners;

use App\Events\VenueSaved;
use App\Models\OpeningHour;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Collection;

class SaveOpeningHoursVenue
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
        $key = $event->key.'_opening-hours';
        if(!empty(session($key))) {
            $opening_hours = session($key);
            if(!($opening_hours instanceof Collection)) {
                $opening_hours = collect(session($key))->map(function($item){
                    return new OpeningHour($item);
                });
            }
            $venue->opening_hours()->saveMany($opening_hours);
            session()->forget($key);
        }
    }
}
