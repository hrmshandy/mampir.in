<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/search', 'SearchController@search');
Route::get('/search/suggest', 'SearchController@suggest');
Route::get('/search/suggest-area', 'SearchController@suggestArea');
Route::get('venue/{slug}', 'VenueController');
Route::get('reviews', 'ReviewController@index');
Route::post('review', 'ReviewController@store');
Route::post('review/upload', 'ReviewController@upload');

Route::get('city', function(Request $request){
    $api_key = '02586f6e74107d6db523cdad625742e3a2e5c88f7d9c340e6b7753087abc580b';
    $url = "http://api.ipinfodb.com/v3/ip-city/?key=$api_key&format=json";

    $d = file_get_contents($url);
    $data = json_decode($d , true);

    return response()->json($data);
});
