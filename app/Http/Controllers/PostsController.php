<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
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

    public function imageUpload(Request $request)
    {
        if(!Storage::exists('contents')) {
            Storage::makeDirectory('contents');
        }
        $files = collect($request->files)->map(function($file){
            $file = $file[0];
            $img = Image::make($file);
            $ext = $file->getClientOriginalExtension();
            $filename = time().'-'.str_random().'.'.$ext;
            $path = 'contents/'.$filename;
            if($img->width() > 700){
                $img->resize(700, null, function ($constraint) {
                    $constraint->aspectRatio();
                });

            }
            Storage::put($path, (string) $img->encode($ext));

            return [["url" => '/storage/'.$path]];
        });

        return response()->json($files);
    }

    public function imageDelete(Request $request)
    {
        $file_url = $request->file;
        $file = preg_replace("/(https?:\/\/([^\s]+))\/storage\//", "", $file_url);

        if(Storage::exists($file)) {
            Storage::delete($file);
        }
        return response()->json('success');
    }
}
