<?php

namespace App\Listeners;

use App\Events\VenueSaved;
use App\Models\Photo;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SavePhotosVenue
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
        $key = $event->key.'_photos';
        if(!empty(session($key))) {
            $photos = collect(session($key))->map(function($item){
                return new Photo(['filename' => $item]);
            });
            $venue->photos()->saveMany($photos);
            session()->forget($key);
        }
    }
}
