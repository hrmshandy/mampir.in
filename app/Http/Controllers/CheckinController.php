<?php

namespace App\Http\Controllers;

use App\Models\CheckinId;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class CheckinController extends Controller
{

    public function generateId()
    {
        if($user = JWTAuth::parseToken()->toUser()) {
            $checkinId = CheckinId::create([
                'user_id' => $user->id,
                'expired_at' => Carbon::now()->addDays(1)->toDateTimeString()
            ]);

            return response()->json($checkinId);
        }

        return response()->json(['status' => 'error', 'message' => 'unauthenticated'], 401);
    }

    public function setPoint($id)
    {
        $checkinId = CheckinId::find($id);

        if(count($checkinId) <= 0 ) {
            return response()->json(['status' => 'error', 'message' => 'Check-in ID not found'], 404);
        }

        if(time() > strtotime($checkinId->expaired_at)) {
            return response()->json(['status' => 'error', 'message' => 'Check-in ID has expired'], 404);
        }

        if($user = JWTAuth::parseToken()->toUser()) {
            return $user->setPoint($id, 'check-in');
        }

        return response()->json(['status' => 'error', 'message' => 'unauthenticated'], 401);
    }
}
