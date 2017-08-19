<?php

namespace App\Models;

class SearchLog extends Model
{

    protected $with = ['keyword', 'user'];

    public function keyword()
    {
        return $this->belongsTo(Keyword::class);
    }

    public function user()
    {
        return $this->belongsTo(Keyword::class);
    }
}
