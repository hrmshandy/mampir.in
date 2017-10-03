<?php

namespace App\Http\Controllers;

use App\Libraries\TemporaryFile;
use App\Models\Operator;
use App\Models\Review;
use App\Models\Venue;
use App\Http\Requests;
use App\Notifications\Verification;
use App\Services\GooglePlacesApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use JWTAuth;

class VenueController extends Controller
{
    public function getFromLocal($slug) {

        if(JWTAuth::getToken()){
            $user_id = JWTAuth::parseToken()->toUser()->id;
        } else{
            $user_id = 0;
        }

        $venue = Venue::with(['reviews' => function($query) use ($user_id) {
            $query->with('user')
                  ->where('reviews.user_id', "<>", $user_id)
                  ->orderBy('created_at', 'desc');
        }, 'categories', 'detail'])->where('slug', $slug)->first();

        $myReview =  Review::with('user')
                            ->where('user_id', $user_id)
                            ->where('venue_id', $venue->id)
                            ->first();
        $venue->myReview = $myReview;

        return response()->json($venue);
    }

    public function getFromGoogle(GooglePlacesApi $google, $place_id)
    {
        return $google->get($place_id);
    }

    public function store(Requests\VenueForm $form)
    {
        $venue = $form->store();

        TemporaryFile::moveImage($venue->logo, 'merchant/logo/');

        $operator = new Operator([
            'name' => $form->operator_name,
            'email' => $form->operator_email,
            'password' => bcrypt($form->operator_password)
        ]);

        $operator = $venue->operator()->save($operator);

        Auth::guard('operator')->login($operator, true);

        return response()->json('success');

        //$operator->notify(new Verification($operator));
    }
}
