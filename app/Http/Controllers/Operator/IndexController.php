<?php

namespace App\Http\Controllers\Operator;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke()
    {
        return view('operator::index');
    }
}
