<?php

namespace App\Models\Getters;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

trait ReviewGetters
{
    public function getPhotosAttribute()
    {
        return $this->photos()->get()->map(function($item){
            return $item->filename;
        });
    }

}
