<?php

namespace App\Listeners;

use App\Events\VenueSaved;
use App\Models\Category;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SaveCategoriesVenue
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
        $key = $event->key.'_categories';
        if(!empty(session($key))) {
            $categories = collect(session($key))->map(function($item){
                return ($item instanceof Category) ? $item->id : intval($item);
            })->filter(function($item){
                return !empty($item);
            })->all();
            if(request()->method() == 'PUT') {
                $venue->categories()->sync($categories);
            } else {
                $venue->categories()->attach($categories);
            }
            session()->forget($key);
        }
    }
}
