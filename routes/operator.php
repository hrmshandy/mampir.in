<?php

// Route::get('/', 'HomeController');

Route::get('/{vue?}', 'IndexController')->where('vue', '[\/\w\.-/+,\%]+');
