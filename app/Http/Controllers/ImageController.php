<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function __invoke($image)
    {
        if(!$image) {
            abort(404);
        }


    }
}
