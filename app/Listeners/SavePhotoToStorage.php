<?php

namespace App\Listeners;

use App\Events\PhotoSaving;
use Illuminate\Http\File;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class SavePhotoToStorage
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  PhotoSaving  $event
     * @return void
     */
    public function handle(PhotoSaving $event)
    {
        $photo = $event->photo;
        $originalFile = $photo->original['filename'];
        $attributeFile = $photo->filename;
        $disk = Storage::disk('public');

        if(!empty($attributeFile)) {
            $file = null;
            $filename = time().'-'.str_random();
            if($attributeFile instanceof UploadedFile) {
                $ext = $attributeFile->getClientOriginalExtension();
                $file = $disk->putFileAs('/', new File($attributeFile), $filename.'.'.$ext);
            } else if (preg_match("/^(http|https):\/\//", $attributeFile)) {
                $content = file_get_contents($attributeFile);
                $image = Image::make($content);
                $pathinfo_ext = pathinfo($attributeFile, PATHINFO_EXTENSION);
                $ext = !empty($pathinfo_ext) ? $pathinfo_ext : 'jpg';

                $disk->put($filename.'.'.$ext, (string) $image->encode());
                $file = $filename.'.'.$ext;
            }

            if(!empty($file)) {
                if($disk->exists($originalFile)) {
                    $disk->delete($originalFile);
                }
                $photo->filename = $file;
            }
        }

    }
}
