<?php

namespace App\Http\Requests;

use App\Models\Comment;
use Illuminate\Foundation\Http\FormRequest;
use Tymon\JWTAuth\Facades\JWTAuth;

class CommentForm extends FormRequest
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
        return [
            'content' => 'required'
        ];
    }

    public function store()
    {
        return Comment::create($this->data());
    }

    public function update(Comment $comment)
    {
        $comment->update($this->data());

        return $comment;
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
