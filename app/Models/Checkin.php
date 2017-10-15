<?php

namespace App\Models;

class Checkin extends Model
{
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'total_purchase' => 'integer',
    ];

    /**
     * user relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * venue relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function venue()
    {
        return $this->belongsTo(Venue::class);
    }

    /**
     * get check-in log by user ID
     *
     * @param $query
     * @param $userId
     * @return mixed
     */
    public function scopeByUser($query, $userId)
    {
        return $query->where('user_id', $userId);
    }

    /**
     * get check-in log by venue ID
     *
     * @param $query
     * @param $venueId
     * @return mixed
     */
    public function scopeByVenue($query, $venueId)
    {
        return $query->where('venue_id', $venueId);
    }

}
