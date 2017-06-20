<?php

namespace App\Http\Controllers;

use App\Models\Venue;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function __invoke(Request $request)
    {
        $venues = Venue::with('categories');
        if(request()->has('location') && !empty(request('location')) && (request('location') != 'null')) {

            if(str_contains(request('location'), ',')) {
                $location = explode(',', request('location'));
                foreach ($location as $l) {
                    $venues = $venues->orWhere('address', 'like', '%'.trim($l).'%');
                }
            } else {
                $venues = $venues->where('address', 'like', '%'.request('location').'%');
            }

        }

        if(request()->has('keyword') && !empty(request('keyword')) && (request('keyword') != 'null')) {
            $venues = $venues->where('name', 'like', '%'.request('keyword').'%');
        }

        if(request()->has('categories') && !empty(request('categories')) && (request('categories') != 'null')) {
            $venues = $venues->whereHas('categories', function($query){
                $query->where('slug', request('categories'));
            });
        }
        return $venues->paginate(20);
    }
}
