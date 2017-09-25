<?php

namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable,
        Relations\UserRelations,
        Getters\UserGetters,
        Setters\UserSetters;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'avatar', 'gender', 'birthday', 'city', 'address', 'phone'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'age', 'mampirin_stamps', 'venue_stamps', 'username'
    ];


    public function setPoint($id, $activity)
    {
        $rule = PointRule::whereSlug($activity)->first();

        if(empty($this->point)) {
            $this->point()->save(new Point());
        }

        $this->point->main_points += $rule->point;
        if($activity == 'check-in') {
            $this->point->purchase_points += 1;
        }
        $this->point->save();

        return $this->point;
    }
}
