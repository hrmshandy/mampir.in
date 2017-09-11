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
    $media = App\Models\Media::find('c29b25a4-9469-11e7-a121-5ce0c5bdb1ea')->toArray();
    return view('test', $media);
});

Route::get('/', 'IndexController');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');
Route::post('oauth/{provider}/connect', 'Auth\OAuthController');
Route::get('user', 'UserController@index');

Route::get('/images/{filename}', 'ImageCacheController')->where('filename', '[ \w\\.\\/\\-\\@]+');
Route::get('/media/{id}', 'MediaController@show');

Route::get('editor', function(){
    return view('editor');
});
// For vue route history mode
Route::get('/journal/{user}/{slug}', 'JournalController')
        ->where('user', '@[\w]+')
        ->where('slug', '[\/\w\.-/+,\-]+');
Route::get('/{vue?}', 'IndexController')->where('vue', '(.*)');
