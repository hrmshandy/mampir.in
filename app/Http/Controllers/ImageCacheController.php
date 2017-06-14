<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;


class ImageCacheController extends Controller
{
    public function __invoke($filename)
    {
        if(!$filename) {
            abort(404);
        }

        $path = storage_path('app/public/'.$filename);
        if(File::exists($path)) {
            $content = Image::cache(function($image) use($path) {
                $image->make($path);
            }, 43200, true);

            return $this->buildResponse($content);
        }

        abort(404);
    }

    /**
     * Builds HTTP response from given image data
     *
     * @param  string $content
     * @return Illuminate\Http\Response
     */
    private function buildResponse($content)
    {
        // define mime type
        $mime = finfo_buffer(finfo_open(FILEINFO_MIME_TYPE), $content);

        // return http response
        return new Response($content, 200, array(
            'Content-Type' => $mime,
            'Cache-Control' => 'max-age='.(43200*60).', public',
            'Etag' => md5($content)
        ));
    }
}
