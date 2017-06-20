<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as EloquentModel;

class Model extends EloquentModel
{
    protected $guarded = ['saving'];

    public function unset($key)
    {
        if(is_array($key)) {
            foreach ($key as $k) {
                unset($this->attributes[$k]);
            }
        } else {
            unset($this->attributes[$key]);
        }
    }
}
