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

        $profile_fields = ['birthday', 'city', 'address', 'phone'];
        $complete_profile = !empty(collect($user->toArray())->only($profile_fields)->filter()->all());

        $access_token = JWTAuth::fromUser($user);

        return response()->json(compact('access_token', 'complete_profile'));
    }
}
