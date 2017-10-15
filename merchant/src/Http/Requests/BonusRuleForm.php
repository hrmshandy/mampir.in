<?php

namespace Merchant\Http\Requests;

use App\Libraries\ImageResizer;
use App\Models\BonusRule;
use Illuminate\Foundation\Http\FormRequest;

class BonusRuleForm extends FormRequest
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
        $rules = [
            'title' => 'required'
        ];

        if($this->method() == 'POST')
            $rules['image'] = 'required';

        return $rules;
    }

    /**
     * @return $this|\Illuminate\Database\Eloquent\Model
     */
    public function store()
    {
        $image = (new ImageResizer($this->image))->resize(300, 300, 'fit')->save();
        return BonusRule::create($this->data(['image' => $image]));
    }

    /**
     * @param BonusRule $comment
     * @return BonusRule
     */
    public function update(BonusRule $comment)
    {
        $comment->update($this->all());

        return $comment;
    }

    /**
     * @param array $data
     * @return array
     */
    protected function data($data = [])
    {
        return array_merge($this->all(), $data);
    }

}