<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('test', function(){
    $client = new \GuzzleHttp\Client();
    try {
        $res = $client->request('GET', 'https://api.instagram.com/oembed?url=https://www.instagram.com/p/BYA_iYLB0qI/');
        dd(json_decode($res->getBody(), true));
    } catch (\Exception $exception) {
        dd("catch");
    }

//    dd($res->getStatusCode());
    //return response()->json(json_decode($r, true));
});

Route::get('/', 'IndexController');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');
Route::post('oauth/{provider}/connect', 'Auth\OAuthController');
Route::get('user', 'UserController@index');

Route::get('/images/{filename}', 'ImageCacheController')->where('filename', '[ \w\\.\\/\\-\\@]+');
Route::get('/media/{url}', 'MediaController')->where('url', '(.*)');

Route::get('editor', function(){
    return view('editor');
});
// For vue route history mode
Route::get('/journal/{user}/{slug}', 'JournalController')
        ->where('user', '@[\w]+')
        ->where('slug', '[\/\w\.-/+,\-]+');
Route::get('/{vue?}', 'IndexController')->where('vue', '(.*)');
