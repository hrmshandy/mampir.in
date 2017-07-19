<?php

namespace App\Http\Controllers;

use App\Models\Venue;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function __invoke(Request $request)
    {
        $venue = Venue::with('categories', 'city');

        if($request->has('location')) {
            $venue = $venue->whereHas('city', function($query) use($request){
                $query->where('name', $request);
            });
        }

        if($request->has('area')) {
            $venue = $venue->where('area', 'like', '%'.$request->area.'%');
        }

        if($request->has('keyword')) {
            $venue = $venue->where('name', 'like', '%'.$request->keyword.'%')
                            ->orWhereHas('categories', function($query) use($request){
                                $query->where('name', 'like', '%'.$request->keyword.'%')
                                      ->orWhere('alias', 'like', '%'.$request->keyword.'%');
                            });
        }

        if($request->has('categories')) {

            $venue = $venue->whereHas('categories', function($query) use($request){
                $query->where('name', 'like', '%'.$request->keyword.'%')
                      ->orWhere('alias', 'like', '%'.$request->keyword.'%');
            });

        }

        return $venue->paginate(20);
    }
}
