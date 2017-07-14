<?php

namespace Hrmsh\Finder;

use Illuminate\Support\ServiceProvider;

class FinderServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerRoute();
    }

    /**
     *
     */
    private function registerRoute()
    {
        $router = $this->app['router'];

        $router->group(['namespace' => 'Hrmsh\Finder\Controllers'], function($router){
            $router->post('finder', 'FinderController@store');
        });
    }
}