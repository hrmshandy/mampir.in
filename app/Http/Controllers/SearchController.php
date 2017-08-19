<?php

namespace App\Http\Controllers;

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

        if(isset($q['city'])) {
            $venue = $venue->whereHas('city', function($query) use($q){
                $query->where('name', $q['city']);
            });
        }

        if(isset($query['keyword'])) {
            $venue = $venue->where(function($query) use($q) {
                $query->where('name', 'like', '%'.$q['keyword'].'%')
                        ->orWhereHas('categories', function($query) use($q){
                            $this->filterCategories($query, $q['keyword']);
                        });
            });
        }

//        if($request->has('categories')) {
//
//            $venue = $venue->whereHas('categories', function($query) use($request) {
//                $this->filterCategories($query, $request->categories);
//            });
//
//        }

        //dd($venue->toSql());

        return response()->json(['data' => $venue->take(6)->get(), 'next_page_url' => null]);
    }

    public function googlePlacesSearch(Request $request, GooglePlacesApi $google, $type)
    {
        $this->writeLog($request);
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

    protected function writeLog(Request $request)
    {
        $query = $this->extractQuery($request->get('query'));

        $keyword = Keyword::firstOrNew(['keyword' => $query['keyword']]);

        $searchLog = SearchLog::firstOrNew([
            'keyword_id' => $keyword->id,
            'user_id' => auth()->check() ? auth()->user()->id : null,
            'city' => $query['city'],
            'ip' => $request->getClientIp()
        ]);

        if(!$searchLog->exists()) {
            $keyword->hint++;
            $keyword->save();

            $searchLog->save();
        }
    }

    protected function extractQuery($query)
    {
        $query = explode('in', $query);

        list($keyword, $location) = collect($query)->map(function($item){
            return trim($item);
        })->all();

        $city = explode(',', $location)[0];

        return compact('keyword', 'city', 'location');
    }
}
