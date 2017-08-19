<?php

namespace App\Http\Controllers;

use App\Http\Requests;
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

    public function store(Requests\ReviewForm $form) {
        $review = $form->store();

        return Review::find($review->id);
    }

    public function update(Requests\ReviewForm $form, Review $review) {
        $review = $form->update($review);

        return Review::find($review->id);
    }

    public function upload(Request $request) {
        $temp = TemporaryFile::saveImage($request->file);
        return response()->json($temp);
    }

}
