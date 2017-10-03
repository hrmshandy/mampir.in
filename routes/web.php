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
    $user = App\Models\User::find(546);

    dd($user->point);
});


Route::get('/', 'IndexController');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');
Route::post('oauth/{provider}/connect', 'Auth\OAuthController');
Route::get('user', 'UserController@index');

Route::get('/images/{filename}', 'ImageCacheController')->where('filename', '[ \w\\.\\/\\-\\@]+');
Route::get('/media/{id}', 'MediaController@show');

// verification token resend form
Route::get('verify/resend', [
    'uses' => 'Auth\VerifyController@showResendForm',
    'as' => 'verification.resend',
]);

// verification token resend action
Route::post('verify/resend', [
    'uses' => 'Auth\VerifyController@sendVerificationLinkEmail',
    'as' => 'verification.resend.post',
]);

// verification message / user verification
Route::get('verify/{token?}', [
    'uses' => 'Auth\VerifyController@verify',
    'as' => 'verification.verify',
]);

Route::get('editor', function(){
    return view('editor');
});
// For vue route history mode
Route::get('/journal/{user}/{slug}', 'JournalController')
        ->where('user', '@[\w]+')
        ->where('slug', '[\/\w\.-/+,\-]+');
Route::get('/{vue?}', 'IndexController')->where('vue', '(.*)');
