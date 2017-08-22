<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Requests;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($user = null)
    {
        $post = Post::with('user');
        if(!empty($user)) {
            $user_id = preg_replace("/\@/", "", $user);
            $post = $post->where('user_id', $user_id);
        } else {
            $post = $post->where('status', 'published');
        }

        return response()->json($post->get());
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
