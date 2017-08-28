<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class JournalController extends Controller
{

    public function __invoke($user, $slug)
    {
        $post = Post::where('slug', $slug)->first();

        return view('journal', compact('post'));
    }
}
