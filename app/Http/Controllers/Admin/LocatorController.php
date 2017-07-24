<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use App\Models\City;
use App\Models\Review;
use App\Models\User;
use App\Models\Venue;
use App\Services\GoogleMapExtractor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use Ramsey\Uuid\Uuid;

class LocatorController extends Controller
{

    public function index()
    {
        $cities = City::pluck('name', 'id');
        $categories = Category::pluck('name', 'id');
        return view('locator.index', compact('cities', 'categories'));
    }

    public function search(Request $request)
    {
        $city = City::find($request->city_id);
        if(count($city) > 0) $request['city'] = $city->name;

        return GoogleMapExtractor::search($request);
    }

    public function store(Requests\VenueForm $form)
    {
        $form['photos'] = $this->handleUploadPhotos($form);

        unset($form['exists']);

        $venue = $form->store();

        $this->reviews($form, $venue);

        return response()->json(['status' => 'success']);
    }

    public function storeAll(Requests\VenueForm $form)
    {
//        foreach($request->venues as $venue) {
//            if(count(Venue::where('slug', $venue['slug'])->first()) <= 0) {
//                Venue::create($venue);
//            }
//        }

        return response()->json(['status' => 'success']);
    }

    public function update(Requests\VenueForm $form, Venue $venue)
    {
        $form['photos'] = $this->handleUploadPhotos($form);

        unset($form['exists']);

        $venue = $form->update($venue);

        $venue->reviews()->delete();
        $this->reviews($form, $venue);

        return response()->json(['status' => 'success']);
    }

    protected function reviews(Request $request, Venue $venue)
    {
        if($request->has('reviews') and !empty($request->reviews)) {
            $reviews = collect($request->reviews)->map(function($review){
                $user = User::where('name', $review['user']['name'])->first();
                if(count($user) <= 0) {
                    $user = User::create($review['user']);
                }
                unset($review['user']);
                $review['user_id'] = $user->id;
                return new Review($review);
            });

            $venue->reviews()->saveMany($reviews);
        }
    }

    protected function handleUploadPhotos(Request $request)
    {
        $photos = [];
        if($request->has('photos') and !empty($request->photos)) {
            foreach ($request->photos as $photourl) {
                $filename = Uuid::uuid1()->toString().'.jpg';
                $newimg = storage_path('app/public/'.$filename);

                // Write the contents back to a new file
                copy($photourl, $newimg);

                $photos[] = $filename;
            }
        }
        return $photos;
    }
}
