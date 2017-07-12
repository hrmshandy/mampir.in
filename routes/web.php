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

\TalvBansal\MediaManager\Routes\MediaRoutes::get();

Route::get('/', 'IndexController');

Route::get('test', function(){
    App\Services\GoogleMapExtractor::get('hiburan', 'tempat hiburan di jakarta');
});

Auth::routes();

Route::post('oauth/{provider}/connect', 'Auth\OAuthController');

Route::get('user', 'UserController@index');

Route::get('/images/{filename}', 'ImageCacheController')->where('filename', '[ \w\\.\\/\\-\\@]+');
// For vue route history mode
Route::get('/{vue?}', 'IndexController')->where('vue', '[\/\w\.-]*');
