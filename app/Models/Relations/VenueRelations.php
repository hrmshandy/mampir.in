<?php

namespace App\Models\Relations;

use App\Models\City;
use App\Models\Operator;
use App\Models\Photo;
use App\Models\Review;
use App\Models\Facility;
use App\Models\VenueStamp;
use App\Models\OpeningHour;
use App\Models\VenueDetail;

trait VenueRelations
{

    public function city()
    {
        return $this->belongsTo(City::class)->select('id', 'name', 'province_id');
    }

    public function detail()
    {
        return $this->hasOne(VenueDetail::class);
    }

    public function facilities()
    {
        return $this->hasMany(Facility::class);
    }

//    public function opening_hours()
//    {
//        return $this->hasMany(OpeningHour::class);
//    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function stamps()
    {
        return $this->hasMany(VenueStamp::class);
    }

    public function operator()
    {
        return $this->hasOne(Operator::class);
    }
}
