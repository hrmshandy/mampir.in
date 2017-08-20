<?php

namespace App\Http\Requests;

use App\Models\Review;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\File\UploadedFile;

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

        $this->uploadPhotos($review);

        return $review;
    }

    public function update(Review $review)
    {
        $review->rating = $this->get('rating');
        $review->content = $this->get('content');
        $review->save();

        // save new photos
        $this->uploadPhotos($review);


        return $review;
    }

    protected function uploadPhotos(Review $review)
    {
        if(!empty($this->imageCollection) && $this->imageCollection instanceof UploadedFile) {
            // delete existing photos
            foreach ($review->photos()->get() as $photo){
                if(Storage::exists($photo->filename)) {
                    Storage::delete($photo->filename);
                }

                $photo->delete();
            }

            $review->savePhotos([$this->imageCollection], 300);
        }
    }
}
