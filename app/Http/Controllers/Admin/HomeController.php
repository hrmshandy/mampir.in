<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function __invoke()
    {
        return view('admin::home');
    }
}
