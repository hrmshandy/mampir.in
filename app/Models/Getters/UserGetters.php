<?php

namespace App\Models\Getters;

use Carbon\Carbon;

trait UserGetters
{
    public function getAvatarAttribute($value)
    {
        return empty($value) ? 'https://api.adorable.io/avatars/80/'.$this->email.'.png' : $value;
    }

    public function getMampirinStampsAttribute()
    {
        return $this->stamps()->get()->sum('mampirin_stamps');
    }

    public function getVenueStampsAttribute()
    {
        return $this->stamps()->get()->sum('venue_stamps');
    }

    public function getAgeAttribute()
    {
        return (new Carbon($this->birthday))->diff(Carbon::now())->format('%y');
    }
}
