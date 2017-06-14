<?php

namespace App\Models;

class Category extends Model
{
    use Concerns\HasIcon;

    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id', 'id');
    }
}
