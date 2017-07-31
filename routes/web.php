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

use Auth;
use Hash;

Route::get('/', 'IndexController');

Route::get('test', function(){
    $auth = Auth::attempt([
        'email' => 'hrmshandy05@gmail.com',
        'password' => 'secret'
    ]);

    $pass = Hash::check('secret', '$2y$10$QT6PKMDUo1oVnzGy2yhHTO3zlaOnCGWTJzrW1CtfY7/S4nugvXf8.');

    dd($pass);
    //return join(DIRECTORY_SEPARATOR, array('uuid', 'name'));
    //App\Services\GoogleMapExtractor::get('hiburan', 'tempat hiburan di jakarta');
});

Auth::routes();

Route::post('oauth/{provider}/connect', 'Auth\OAuthController');

Route::get('user', 'UserController@index');

Route::get('/images/{filename}', 'ImageCacheController')->where('filename', '[ \w\\.\\/\\-\\@]+');
// For vue route history mode
Route::get('/{vue?}', 'IndexController')->where('vue', '[\/\w\.-]*');
