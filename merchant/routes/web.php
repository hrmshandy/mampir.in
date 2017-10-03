<?php

Route::get('/', 'DashboardController');

Route::get('/bonus-rule', 'BonusRuleController@index');
Route::post('/bonus-rule', 'BonusRuleController@store');

Route::get('/discount-promotion', 'DiscountPromotionController@index');
Route::post('/discount-promotion', 'DiscountPromotionController@store');

Route::get('/edit-info', 'EditInfoController@index');
Route::put('/edit-info', 'EditInfoController@update');

Route::get('login', 'Auth\LoginController@showLoginForm');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');

