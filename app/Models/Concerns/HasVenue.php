<?php

namespace App\Models\Concerns;

use App\Models\Venue;

trait HasVenue
{
    public function venue()
    {
        return $this->belongsTo(Venue::class);
    }
}
