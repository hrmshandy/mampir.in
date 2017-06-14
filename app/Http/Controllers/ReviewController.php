<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function store(Request $request) {
        $review = Review::create($request->all());
        return Review::with('user')->find($review->id);
    }

}
