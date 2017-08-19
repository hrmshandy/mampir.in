<?php

namespace App\Models;

class VenueStamp extends Model
{
    use Concerns\HasVenue;

    public function stamp()
    {
        return $this->belongsTo(Stamp::class);
    }
}
