<?php

namespace App\Models;

class Stamp extends Model
{
    use Concerns\HasUser;

    public function venue_stamp()
    {
        return $this->hasOne(VenueStamp::class);
    }
}
