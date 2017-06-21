<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{

    public function index()
    {
        $review = Review::with('venue', 'user')
                        ->whereHas('venue', function($query){
                            $query->groupBy('name');
                        })
                        ->orderBy('created_at', 'desc')
                        ->take(10)->get()->toArray();
        return response()->json($review);
    }

    public function store(Request $request) {
        $review = Review::create($request->all());
        return Review::with('user')->find($review->id);
    }

}
