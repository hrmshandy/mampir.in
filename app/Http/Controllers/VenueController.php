<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\Venue;
use Illuminate\Http\Request;
use JWTAuth;

class VenueController extends Controller
{
    public function __invoke($slug) {

        $venue = Venue::with(['reviews' => function ($query) {
            $query->orderBy('created_at', 'desc');
        }, 'reviews.user', 'categories'])->where('slug', $slug)->first();

        return response()->json($venue);
    }
}
