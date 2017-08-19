<?php

namespace App\Models\Setters;

trait VenueSetters
{
    public function setStatusAttribute($value)
    {
        if($value == 'Publish') {
            $this->attributes['status'] = 1;
        } else if($value == 'Unpublished') {
            $this->attributes['status'] = 0;
        } else {
            $this->attributes['status'] = $value;
        }
    }
}
