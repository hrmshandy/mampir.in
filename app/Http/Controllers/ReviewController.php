<?php

namespace App\Http\Controllers;

use App\Models\Photo;
use App\Models\Review;
use App\Libraries\TemporaryFile;
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
        $review = new Review($request->all());
        $review->imageCollection = $request->get('imageCollection');
        $review->save();

        return Review::with('user')->find($review->id);
    }

    public function update(Request $request, $id) {
        $review = Review::with('user')->find($id);
        $review->imageCollection = $request->get('imageCollection');
        $review->content = $request->content;
        $review->rating = $request->rating;
        $review->save();

        return $review;
    }

    public function upload(Request $request) {
        $temp = TemporaryFile::saveImage($request->file);
        return response()->json($temp);
    }

}
