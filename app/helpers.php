<?php

if(!function_exists('page_iteration')) {
    function page_iteration($iteration, $per_page = 10) {
        $page = request()->has('page') ? request('page') : 1;
        return ($per_page*($page-1))+$iteration;
    }
}

if(!function_exists('adm_url')) {
    function adm_url($url) {
        return url('_admin/'.$url);
    }
}
