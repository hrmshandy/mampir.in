<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\Venue;
use Illuminate\Http\Request;
use JWTAuth;

class VenueController extends Controller
{
    public function __invoke($slug) {

        if(JWTAuth::getToken()){
            $user_id = JWTAuth::parseToken()->toUser()->id;
        } else{
            $user_id = 0;
        }

        $venue = Venue::with(['reviews' => function($query) use ($user_id) {
            $query->with('user')
                  ->where('reviews.user_id', "<>", $user_id)
                  ->orderBy('created_at', 'desc');
        }, 'categories'])->where('slug', $slug)->first();

        $myReview =  Review::with('user')
                            ->where('user_id', $user_id)
                            ->where('venue_id', $venue->id)
                            ->first();
        $venue->myReview = $myReview;

        return response()->json($venue);
    }
}
