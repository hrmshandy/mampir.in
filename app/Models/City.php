<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{

    protected $hidden = [
        'province_id'
    ];

    protected $with = ['province'];

    public function province()
    {
        return $this->belongsTo(Province::class)->select('id', 'name');
    }
}
