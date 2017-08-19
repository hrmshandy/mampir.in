<?php

namespace App\Models\Setters;

use Carbon\Carbon;

trait UserSetters
{
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }

    public function setBirthdayAttribute($value)
    {
        if(is_array($value)) {
            $this->attributes['birthday'] = (new Carbon(implode(' ', $value)))->toDateString();
        }
    }
}
