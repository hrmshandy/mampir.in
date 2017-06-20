<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use App\Models\Venue;
use App\Services\GoogleMapExtractor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LocatorController extends Controller
{

    public function index()
    {
        $categories = Category::pluck('name', 'slug');
        return view('locator.index', compact('categories'));
    }

    public function search(Request $request)
    {
        if($request->has('category') and !empty($request->has('query'))) {
            return GoogleMapExtractor::get($request->get('category'), $request->get('query'));
        }
    }

    public function store(Request $request)
    {
        if(count(Venue::where('slug', $request->slug)->first()) <= 0) {
            Venue::create($request->all());
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
