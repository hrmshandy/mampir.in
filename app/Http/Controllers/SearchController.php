<?php

namespace App\Http\Controllers;

use App\Models\Venue;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function __invoke(Request $request)
    {
        $venues = Venue::with('categories');
        $query = '';
        if($this->exists($request, 'location')) {

            $query .= '(city:'.$request->location.' OR province:'.$request->location.')';

        }

        if($this->exists($request, 'area')) {

            $query .= ' AND area:'.$request->location;

        }

        if($this->exists($request, 'keyword')) {

            $query .= ' AND '.$request->keyword;

        }

        if($this->exists($request, 'categories')) {

            $query .= ' AND categories:'.$request->categories;

        }

        return $venues->search($query)->paginate(20);
    }

    protected function exists(Request $request, $field)
    {
        return $request->has($field) && !empty($request->input($field)) && ($field->input($field) != 'null');
    }
}
