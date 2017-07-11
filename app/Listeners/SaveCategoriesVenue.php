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
            $categories = [];
            foreach (session($key) as $slug) {
                if(is_numeric($slug)) {
                    $categories[] = $slug;
                } else {
                    $category = Category::where('slug', $slug)->first();
                    if(count($category) > 0) {
                        $categories[] = $category->id;
                    }
                }
            }
            $venue->categories()->sync($categories);
            session()->forget($key);
        }
    }
}
