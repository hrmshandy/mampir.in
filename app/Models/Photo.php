<?php

namespace App\Models;

class Photo extends Model
{
    /**
     * Get all of the owning attachable models.
     */
    public function attachable()
    {
        return $this->morphTo();
    }
}
