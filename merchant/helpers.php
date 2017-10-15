<?php

if(!function_exists('op')) {
    function op() {
        if(auth('operator')->check())
            return auth('operator')->user();

        return null;
    }
}

if(!function_exists('now')) {
    function now() {
        return Carbon\Carbon::now();
    }
}