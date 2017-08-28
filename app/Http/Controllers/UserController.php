<?php

namespace App\Http\Controllers;

use Illuminate\Validation\Rule;
use JWTAuth;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = JWTAuth::parseToken()->toUser();
        return response()->json($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => [
                'required',
                Rule::unique('users')->ignore($user->id),
            ],
            'gender' => 'required',
            'city' => 'required',
//            'address' => 'required',
            'phone' => 'required',
            'birthday.day' => 'required',
            'birthday.month' => 'required',
            'birthday.year' => 'required'
        ]);

        $user->update($request->all());

        return response()->json(['status' => 'success', 'message' => 'user has been updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();

        return response()->json(['status' => 'success', 'message' => 'user has been deleted']);
    }
}
