<?php

namespace App\Models;

use App\Services\UserVerfication\Contracts\RequiresEmailVerification as RequiresEmailVerificationContract;
use App\Services\UserVerfication\RequiresEmailVerification;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Operator extends Authenticatable //implements RequiresEmailVerificationContract
{
    use Notifiable; //, RequiresEmailVerification;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'avatar'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function venue()
    {
        return $this->belongsTo(Venue::class);
    }
}
