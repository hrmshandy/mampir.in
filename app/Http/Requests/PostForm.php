<?php

namespace App\Http\Requests;

use App\Models\Post;
use Illuminate\Foundation\Http\FormRequest;
use Tymon\JWTAuth\Facades\JWTAuth;

class PostForm extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [];

        if($this->get('status') == "published") {
            $rules['title'] = 'required';
            $rules['content'] = 'required';
        }

        return $rules;
    }

    public function store()
    {

        $post = Post::create($this->data());

        return $post;
    }

    public function update($post)
    {
        $post->update($this->data());

        return $post;
    }

    protected function data()
    {
        $data = $this->all();
        if($user = JWTAuth::parseToken()->toUser()) {
            $data['user_id'] = $user->id;
        }
        return $data;
    }
}
