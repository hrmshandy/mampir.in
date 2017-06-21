<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{

    public function index(Request $request)
    {
        $review = Review::with('venue', 'user');
        if($request->has('location') and !empty($request->location) and $request->location != 'null') {
            $review = $review->whereHas('venue', function($query) use($request) {
                $query->where('address', 'like', '%'.$request->location.'%');
            });
        }
        $review = $review->orderBy('created_at', 'desc')->take(10)->get()->toArray();
        return response()->json($review);
    }

    public function store(Request $request) {
        $review = Review::create($request->all());
        return Review::with('user')->find($review->id);
    }

}
