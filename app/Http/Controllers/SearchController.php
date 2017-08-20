<?php

namespace App\Http\Controllers;

use App\Jobs\WriteSearchLog;
use App\Models\Category;
use App\Models\City;
use App\Models\Keyword;
use App\Models\SearchLog;
use App\Models\Venue;
use App\Services\GoogleMapExtractor;
use App\Services\GooglePlacesApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function localSearch(Request $request)
    {
        $q = $this->extractQuery($request->get('query'));

        $venue = Venue::with('categories', 'city');

        if(!empty($q['city'])) {
            $venue = $venue->whereHas('city', function($query) use($q){
                $query->where('name', $q['city']);
            });
        }

        if(!empty($q['keyword'])) {
            $venue = $venue->where(function($query) use($q) {
                $query->where('name', 'like', '%'.$q['keyword'].'%')
                        ->orWhereHas('categories', function($query) use($q){
                            $this->filterCategories($query, $q['keyword']);
                        });
            });
        }

        return response()->json(['data' => $venue->take(6)->get(), 'next_page_url' => null]);
    }

    public function googlePlacesSearch(Request $request, GooglePlacesApi $google, $type)
    {
        if($request->has('query')) {
            $query = $this->extractQuery($request->get('query'));
            dispatch(new WriteSearchLog($query));
        }
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

    public function suggestKeyword(Request $request)
    {
        if($request->has('keyword')) {
            $keywords = Keyword::where('keyword', 'like', '%'.$request->keyword.'%')
                                 ->select('id', 'keyword AS text', 'hint')
                                 ->orderBy('hint', 'desc');

            return $keywords
                ->take(10)
                ->get();
        }

        return [];
    }


    protected function filterCategories($query, $keyword)
    {
        $query->where('name', 'like', '%'.$keyword.'%')
            ->orWhere('alias', 'like', '%'.$keyword.'%');
    }

    protected function extractQuery($query)
    {
        $query = explode('in', $query);

        list($keyword, $location) = collect($query)->map(function($item){
            $item = preg_replace("/\+/", " ", $item);
            return trim($item);
        })->all();

        $city = explode(',', $location)[0];

        return compact('keyword', 'city', 'location');
    }
}
