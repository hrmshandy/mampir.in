<?php

Auth::routes();

Route::get('/', 'HomeController');

Route::resource('category', 'CategoryController');
Route::resource('venue', 'VenueController');

Route::get('locator', 'LocatorController@index');
Route::post('locator/search', 'LocatorController@search');
Route::post('locator/all', 'LocatorController@storeAll');
Route::post('locator', 'LocatorController@store');