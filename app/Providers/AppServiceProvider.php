<?php

namespace App\Providers;

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
        $locale = request()->segment(2);
        $lc_time = $locale.'_'.strtoupper($locale).'.utf8';
        setlocale(LC_TIME, $lc_time);

        Schema::defaultStringLength(191);

        View::addNamespace('admin', realpath(resource_path('admin/views')));
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
