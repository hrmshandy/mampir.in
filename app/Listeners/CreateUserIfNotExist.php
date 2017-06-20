<?php

namespace App\Listeners;

use App\Events\ReviewSaving;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CreateUserIfNotExist
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
     * @param  ReviewSaving  $event
     * @return void
     */
    public function handle(ReviewSaving $event)
    {
    }
}
