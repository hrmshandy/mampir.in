<?php

namespace App\Models\Relations;

use App\Models\Point;
use App\Models\SocialAccount;
use App\Models\Stamp;

trait UserRelations
{
    public function social_account()
    {
        return $this->hasOne(SocialAccount::class);
    }

    public function stamps()
    {
        return $this->hasMany(Stamp::class);
    }

    public function point()
    {
        return $this->hasOne(Point::class);
    }
}
