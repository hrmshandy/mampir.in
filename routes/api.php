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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::post('/check-in/generate-id', 'CheckinController@generateId');
Route::post('/check-in/set-point', 'CheckinController@setPoint');
Route::get('/media-resource/{url}', 'MediaController@getSource')->where('url', '(.*)');
Route::get('/search/local', 'SearchController@localSearch');
Route::get('/search/google-places/{type}', 'SearchController@googlePlacesSearch');
Route::get('/search/suggest/location', 'SearchController@suggestLocation');
Route::get('/search/suggest/keyword', 'SearchController@suggestKeyword');
Route::get('venue/l/{slug}', 'VenueController@getFromLocal');
Route::get('venue/g/{place_id}', 'VenueController@getFromGoogle');
Route::get('reviews', 'ReviewController@index');
Route::post('review', 'ReviewController@store');
Route::put('review/{review}', 'ReviewController@update');
Route::post('review/upload', 'ReviewController@upload');
Route::get('posts/me/{status?}', 'PostsController@user');
Route::post('posts/image/upload', 'PostsController@imageUpload');
Route::delete('posts/image/delete', 'PostsController@imageDelete');
Route::get('posts/{post}/edit', 'PostsController@edit');
Route::resource('user', 'UserController', ['only' => [
    'index', 'update', 'destroy'
]]);
Route::apiResource('comments', 'CommentsController');
Route::apiResource('posts', 'PostsController');

Route::get('city', function(Request $request){
    $api_key = '02586f6e74107d6db523cdad625742e3a2e5c88f7d9c340e6b7753087abc580b';
    $url = "http://api.ipinfodb.com/v3/ip-city/?key=$api_key&format=json";

    $d = file_get_contents($url);
    $data = json_decode($d , true);

    return response()->json($data);
});
