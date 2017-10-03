<?php

namespace Merchant\Http\ViewComposers;

use Illuminate\View\View;

class MerchantComposer
{

    /**
     * The user repository implementation.
     *
     */
    protected $user;

    /**
     * Create a new profile composer.
     *
     */
    public function __construct()
    {
        $this->user = auth('operator')->check() ? auth('operator')->user() : null;
    }

    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        if ($view->getName() != 'merchant::auth.login') {
            $view->with('user', $this->user);
            $view->with('merchant', $this->user->venue);
        }
    }
}