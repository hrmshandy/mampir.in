<?php


namespace Merchant\Http\Requests;


use App\Libraries\ImageResizer;
use App\Models\Discount;
use Illuminate\Foundation\Http\FormRequest;

class DiscountForm extends FormRequest
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
            'title' => 'required',
            'date_start.day' => 'required',
            'date_start.month' => 'required',
            'date_end.day' => 'required',
            'date_end.month' => 'required'
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
        return Discount::create($this->data(['image' => $image]));
    }

    /**
     * @param BonusRule $comment
     * @return BonusRule
     */
    public function update(Discount $comment)
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