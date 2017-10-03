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
Route::post('check-in/generate-id', 'CheckinController@generateId');
Route::post('check-in/set-point', 'CheckinController@setPoint');

Route::apiResource('comments', 'CommentsController');

Route::post('image', 'ImageController@store');
Route::delete('image/{file}', 'ImageController@destroy');

Route::get('media-resource/{url}', 'MediaController@getSource')->where('url', '(.*)');

Route::get('posts/me/{status?}', 'PostsController@user');
Route::get('posts/{post}/edit', 'PostsController@edit');
Route::post('posts/image/upload', 'PostsController@imageUpload');
Route::delete('posts/image/delete', 'PostsController@imageDelete');
Route::apiResource('posts', 'PostsController');

Route::get('reviews', 'ReviewController@index');
Route::post('review', 'ReviewController@store');
Route::post('review/upload', 'ReviewController@upload');
Route::put('review/{review}', 'ReviewController@update');

Route::get('/search/local', 'SearchController@localSearch');
Route::get('/search/google-places/{type}', 'SearchController@googlePlacesSearch');
Route::get('/search/suggest/location', 'SearchController@suggestLocation');
Route::get('/search/suggest/keyword', 'SearchController@suggestKeyword');

Route::resource('user', 'UserController', ['only' => [
    'index', 'update', 'destroy'
]]);

Route::get('venue/l/{slug}', 'VenueController@getFromLocal');
Route::get('venue/g/{place_id}', 'VenueController@getFromGoogle');
Route::post('venue', 'VenueController@store');
