<?php

namespace App\Listeners;

use App\Events\ReviewSaved;
use App\Libraries\TemporaryFile;
use App\Models\Photo;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Collection;
use Zend\Diactoros\Request;

class SavePhotosReview
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
    public function handle(ReviewSaved $event)
    {
        $review = $event->review;
        $photos = $review->imageCollection;
        if(!($photos instanceof Collection)) {

            $photos = collect($photos)->map(function($item){
                if(TemporaryFile::moveImage($item, "images/reviews/")){
                    return new Photo(['filename' => $item]);
                }
            });
        }
        $review->photos()->saveMany($photos);
    }
}
