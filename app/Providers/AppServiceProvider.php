<?php

namespace App\Providers;

use Carbon\Carbon;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        setlocale(LC_TIME, 'id_ID');
        Carbon::setLocale('id');

        Schema::defaultStringLength(191);

        View::addNamespace('admin', realpath(resource_path('admin/views')));
        View::addNamespace('operator', realpath(resource_path('operator/views')));
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
