<?php

namespace App\Http\Controllers;

use App\Models\Venue;
use Illuminate\Http\Request;

class VenueController extends Controller
{
    public function __invoke($slug) {
        $venue = Venue::with('categories', 'reviews', 'reviews.user')->where('slug', $slug)->first();
        return response()->json($venue);
    }
}
