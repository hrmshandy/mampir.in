<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'App\Events\VenueSaving' => [
            'App\Listeners\HandleVenueSaving',
        ],
        'App\Events\VenueSaved' => [
            'App\Listeners\SaveDetailVenue',
            'App\Listeners\SaveOpeningHoursVenue',
            'App\Listeners\SavePhotosVenue',
            'App\Listeners\SaveReviewsVenue',
            'App\Listeners\SaveCategoriesVenue',
        ],
        'App\Events\PhotoSaving' => [
            'App\Listeners\SavePhotoToStorage',
        ],
        'App\Events\ReviewSaving' => [
            'App\Listeners\CreateUserIfNotExist',
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
