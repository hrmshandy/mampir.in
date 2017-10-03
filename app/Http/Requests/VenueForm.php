<?php

namespace App\Http\Requests;

use App\Models\Photo;
use App\Models\Venue;
use App\Models\VenueDetail;
use Illuminate\Foundation\Http\FormRequest;

class VenueForm extends FormRequest
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
            'name' => 'required',
//            'city_id' => 'required',
            'address' => 'required',
            'lat' => 'required',
            'lng' => 'required',
//            'categories' => 'required',
            //'photos' => 'required'
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'city_id' => 'the city field is required'
        ];
    }


    /**
     *
     */
    public function store()
    {
        $venue = Venue::create($this->data());

        //$venue->detail()->save(new VenueDetail($this->detail));

        //$venue->categories()->attach($this->categories);

        //$this->photos($venue);

        return $venue;
    }

    /**
     *
     */
    public function storeAll()
    {
        foreach($this->venues as $venue) {
            $venue = Venue::create($this->data());

            $venue->detail()->save(new VenueDetail($this->detail));

            $venue->categories()->attach($this->categories);

            $this->photos($venue);
        }

    }

    public function update($venue)
    {
        $venue->update($this->data());

//        $venue->detail()->update($this->detail);
//
//        $venue->categories()->sync($this->categories);

        // delete existing photos
//        $venue->photos()->delete();

        // save new photos
//        $this->photos($venue);

        return $venue;
    }

    protected function data()
    {
//        return $this->except([
//            'categories', 'detail', 'photos', 'reviews', 'qqfile', 'keywords',
//            'operator_email', 'operator_password'
//        ]);

        return $this->only([
            'name', 'logo', 'cover', 'address', 'lat', 'lng', 'phone_number',
            'email', 'website', 'opening_hours', 'payment_method',
        ]);
    }

    protected function photos(Venue $venue)
    {
        if(!empty($this->photos)) {
            $photos = collect($this->photos)->map(function($file){
                return new Photo(['filename' => $file]);
            })->all();
            $venue->photos()->saveMany($photos);
        }
    }
}
