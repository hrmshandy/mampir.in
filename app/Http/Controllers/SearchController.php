<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\City;
use App\Models\Venue;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $venue = Venue::with('categories', 'city');

        if($request->has('location')) {
            $venue = $venue->whereHas('city', function($query) use($request){
                $query->where('name', $request->location);
            });
        }

        if($request->has('area')) {
            $venue = $venue->where('area', 'like', '%'.$request->area.'%');
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

        return $venue->paginate(20);
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
        $venue = Venue::with('city')->select('area');

        if($request->has('location')) {
            $venue = $venue->whereHas('city', function($query) use($request){
                $query->where('name', $request->location);
            });
        }

        if($request->has('area')) {
            $venue = $venue->where(function($query) use($request) {
                $query->where('area', 'like', '%'.$request->area.'%');
            });

            return $venue->groupBy('area')
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
