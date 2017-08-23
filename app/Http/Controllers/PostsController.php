<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Requests;
use Tymon\JWTAuth\Facades\JWTAuth;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($user = null)
    {
        $post = Post::with('user')->get();
        return response()->json($post);
    }

    public function user($status = null)
    {
        $post = [];
        if($user = JWTAuth::parseToken()->toUser()) {
            $post = Post::with('user')->where('user_id', $user->id);
            if(!empty($status)) {
                $post = $post->where('status', $status);
            }
            $post = $post->get();
        }
        return response()->json($post);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Requests\PostForm $form
     * @return \Illuminate\Http\Response
     */
    public function store(Requests\PostForm $form)
    {
        return $form->store();
    }

    /**
     * Display the specified resource.
     *
     * @param $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $post = Post::with('user')->where('slug', $slug)->first();
        return response()->json($post);
    }

    /**
     * Display the specified resource.
     *
     * @param Post $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        return response()->json($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Requests\PostForm $form
     * @param Post $post
     * @return \Illuminate\Http\Response
     */
    public function update(Requests\PostForm $form, Post $post)
    {
        return $form->update($post);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Post $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();

        return response()->json('success');
    }
}
