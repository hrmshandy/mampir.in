<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class LogoutController extends Controller
{
    public function __invoke(Request $request)
    {
        dd($request->user()->token());
        if(!empty($request->user())) {
            $request->user()->token()->revoke();
        } else if(!empty($request->header('Authorization'))) {
            $token = str_replace('Bearer ', '', $request->header('Authorization'));
            DB::table('oauth_access_tokens')
                ->where('id', $token)
                ->update([
                    'revoked' => true
                ]);
        } else {
            return response()->json(['error' => 'logout error'], 400);
        }
        return response()->json('success');
    }
}
