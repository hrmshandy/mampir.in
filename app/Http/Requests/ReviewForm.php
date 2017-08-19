<?php

namespace App\Http\Requests;

use App\Models\Review;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;

class ReviewForm extends FormRequest
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
            'rating' => 'required',
            //'imageCollection' => 'required',
            'content' => 'required'
        ];
    }

    /**
     *
     */
    public function store()
    {
        $review = Review::create($this->except('imageCollection'));

        if(!empty($this->imageCollection))
            $review->savePhotos([$this->imageCollection], 500);

        return $review;
    }

    public function update(Review $review)
    {
        $review->update($this->except('imageCollection'));

        // delete existing photos
        foreach ($review->photos()->get() as $photo){
            if(Storage::exists($photo->filename)) {
                Storage::delete($photo->filename);
            }

            $photo->delete();
        }

        // save new photos
        if(!empty($this->imageCollection))
            $review->savePhotos([$this->imageCollection], 300);

        return $review;
    }
}
