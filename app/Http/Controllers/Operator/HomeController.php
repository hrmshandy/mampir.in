<?php

namespace App\Http\Controllers\Operator;

use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function __invoke()
    {
        return view('operator::home');
    }
}
