<?php

namespace App\Models\Concerns;

use App\Models\Icon;

trait HasIcon
{
    public function icons()
    {
        return $this->morphToMany(Icon::class, 'iconable');
    }
}
