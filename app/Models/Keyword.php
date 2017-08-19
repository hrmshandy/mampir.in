<?php

namespace App\Models;

class Keyword extends Model
{

    public function search_log()
    {
        return $this->hasMany(SearchLog::class);
    }
}
