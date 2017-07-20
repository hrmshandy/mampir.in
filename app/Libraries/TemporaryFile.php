<?php

namespace App\Libraries;

use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class TemporaryFile
{
    public static function saveImage(UploadedFile $origin)
    {
        $disk = Storage::disk('public');

        $filename = time().'-'.str_random();
        if($origin instanceof UploadedFile) {
            $ext = $origin->getClientOriginalExtension();
            $file = $disk->putFileAs('/_temp/', new File($origin), $filename.'.'.$ext);
        } else if (preg_match("/^(http|https):\/\//", $origin)) {
            $content = file_get_contents($origin);
            $image = Image::make($content);
            $pathinfo_ext = pathinfo($origin, PATHINFO_EXTENSION);
            $ext = !empty($pathinfo_ext) ? $pathinfo_ext : 'jpg';

            $disk->put($filename.'.'.$ext, (string) $image->encode());
            $file = $filename.'.'.$ext;
        }

        return $filename.'.'.$ext;
    }

    public static function moveImage($filename, $destination){
        return Storage::move("/_temp/".$filename, $destination.$filename);
    }
}
