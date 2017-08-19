<?php

namespace App\Models\Concerns;

use App\Libraries\ImageResizer;
use App\Models\Photo;
use Illuminate\Support\Collection;

trait HasPhotos
{
    public function photos()
    {
        return $this->morphMany(Photo::class, 'attachable');
    }

    /**
     * upload & attach photos
     *
     * @param array $photos
     * @param $resize
     */
    public function savePhotos(array $photos, $width = null, $height = null)
    {
        $photos = collect($photos)->map(function($item) use($width, $height) {
           return (new ImageResizer($item))->resize($width, $height)->save();
        });

        $this->attachPhotos($photos);
    }

    /**
     * attach available photos
     *
     * @param $photos
     * @throws \Exception
     */
    public function attachPhotos($photos)
    {
        if(!is_array($photos) and !($photos instanceof Collection)) {
            throw new \Exception("photos must be array or Collection");
        }

        $photos = $this->convertToCollection($photos);

        $photos = $photos->map(function($item){
            return new Photo(['filename' => $item]);
        });

        $this->photos()->saveMany($photos);
    }

    protected function convertToCollection($data)
    {
        if(!($data instanceof Collection))
            $data = collect($data);

        return $data;
    }
}
