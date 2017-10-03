<?php

namespace Merchant\Http\Controllers;

class DashboardController extends Controller
{
    public function __invoke()
    {
        return view('merchant::dashboard');
    }
}