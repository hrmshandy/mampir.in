<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use App\Models\City;
use App\Models\Venue;
use App\Services\GoogleMapExtractor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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
        $query = $request->only('query', 'area');
        $query['city'] = City::find($request->city_id)->name;
        $query = implode(',', $query);
        if($request->has('categories') and !empty($request->has('query'))) {
            return GoogleMapExtractor::get($request->get('categories'), $query);
        }
    }

    public function store(Request $request)
    {
        $venue = Venue::where('slug', $request->slug)->first();
        if(count($venue) <= 0) {
            Venue::create($request->all());
        } else {
            $venue->update($request->all());
        }

        return response()->json(['status' => 'success']);
    }

    public function storeAll(Request $request)
    {
        foreach($request->venues as $venue) {
            if(count(Venue::where('slug', $venue['slug'])->first()) <= 0) {
                Venue::create($venue);
            }
        }

        return response()->json(['status' => 'success']);
    }
}
