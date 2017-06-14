<?php

namespace App\Http\Controllers\Auth;

use JWTAuth;
use App\OAuth\User;
use App\Services\SocialAccountService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OAuthController extends Controller
{
    public function __invoke(Request $request, SocialAccountService $service, $provider)
    {
        $user = $service->createOrGetUser(new User($request->user), $provider);

        $token = JWTAuth::fromUser($user);

        return response()->json(['access_token' => $token]);
    }
}
