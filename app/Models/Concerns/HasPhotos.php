<?php

namespace App\Models\Concerns;

use App\Models\Photo;

trait HasPhotos
{
    public function photos()
    {
        return $this->morphMany(Photo::class, 'attachable');
    }
}
