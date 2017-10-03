<?php

namespace Merchant\Providers;

use App;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class MerchantServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerRoutes();
        $this->registerResources();
        $this->registerViewComposer();
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

    /**
     * Register the Merchant routes.
     *
     * @return void
     */
    protected function registerRoutes()
    {
        Route::group([
            'domain' => 'merchant.mampir.in.dev',
            'namespace' => 'Merchant\Http\Controllers',
            'middleware' => 'web',
        ], function () {
            $this->loadRoutesFrom(__DIR__.'/../../routes/web.php');
        });
    }

    /**
     * Register the Merchant resources.
     *
     * @return void
     */
    protected function registerResources()
    {
        $this->loadViewsFrom(__DIR__.'/../../resources/views', 'merchant');
    }


    /**
     * Register the Merchant view composer.
     */
    protected function registerViewComposer()
    {
        View::composer(
            'merchant::*', 'Merchant\Http\ViewComposers\MerchantComposer'
        );
    }
}