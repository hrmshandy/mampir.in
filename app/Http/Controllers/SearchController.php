<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\City;
use App\Models\Venue;
use App\Services\GoogleMapExtractor;
use App\Services\GooglePlacesApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function localSearch(Request $request)
    {
        $venue = Venue::with('categories', 'city');

        if($request->has('city')) {
            $venue = $venue->whereHas('city', function($query) use($request){
                $query->where('name', $request->city);
            });
        }

        if($request->has('keyword')) {
            $venue = $venue->where(function($query) use($request) {
                $query->where('name', 'like', '%'.$request->keyword.'%')
                        ->orWhereHas('categories', function($query) use($request){
                            $this->filterCategories($query, $request, $request->keyword);
                        });
            });
        }

        if($request->has('categories')) {

            $venue = $venue->whereHas('categories', function($query) use($request) {
                $this->filterCategories($query, $request, $request->categories);
            });

        }

        //dd($venue->toSql());

        return response()->json(['data' => $venue->take(6)->get(), 'next_page_url' => null]);
    }

    public function googlePlacesSearch(Request $request, GooglePlacesApi $google, $type)
    {
        return $google->{$type.'Search'}($request);
    }

    public function suggestLocation(Request $request)
    {
        if($request->has('keyword')) {
            $locations = City::where('name', 'like', '%'.$request->keyword.'%')
                            ->select('id', 'name AS text');

            return $locations
                ->take(10)
                ->get();
        }

        return [];
    }

    public function suggestCategory(Request $request)
    {
        if($request->has('keyword')) {
            $categories = Category::where('name', 'like', '%'.$request->keyword.'%')
                                  ->orWhere('alias', 'like', '%'.$request->keyword.'%')
                                  ->select('id', 'name AS text', 'alias');

            return $categories
                ->take(10)
                ->get();
        }

        return [];
    }


    protected function filterCategories($query, Request $request, $keyword)
    {
        $query->where('name', 'like', '%'.$keyword.'%')
            ->orWhere('alias', 'like', '%'.$keyword.'%');
    }
}
