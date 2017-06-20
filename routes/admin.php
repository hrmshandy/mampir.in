<?php

Route::get('locator', 'LocatorController@index');
Route::post('locator/search', 'LocatorController@search');
Route::post('locator/all', 'LocatorController@storeAll');
Route::post('locator', 'LocatorController@store');