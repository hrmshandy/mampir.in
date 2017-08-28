<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comments = Comment::with('user')
                            ->where('status', 'approved')
                            ->orderBy('created_at', 'desc')->get();

        return response()->json($comments);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Requests\CommentForm $form
     * @return \Illuminate\Http\Response
     */
    public function store(Requests\CommentForm $form)
    {
        $comment = $form->store();
        $comment = Comment::with('user')->find($comment->id);

        return response()->json($comment);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Requests\CommentForm $form
     * @param Comment $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Requests\CommentForm $form, Comment $comment)
    {
        $comment = $form->update($comment);
        $comment = Comment::with('user')->find($comment->id);

        return response()->json($comment);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Comment $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        $comment->delete();

        return response()->json('success');
    }
}
