<?php

namespace App\Models;

use App\Events\PhotoSaving;

class Photo extends Model
{
    /**
     * Get all of the owning attachable models.
     */
    public function attachable()
    {
        return $this->morphTo();
    }

    /**
     * The event map for the model.
     *
     * @var array
     */
    protected $events = [
        'saving' => PhotoSaving::class
    ];

    /**
     * The attributes that should be visible in arrays.
     *
     * @var array
     */
    protected $visible = ['id', 'filename'];
}
