<?php

namespace App\Http\Controllers;

use App\Libraries\TemporaryFile;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function store(Request $request)
    {
        $file = TemporaryFile::saveImage($request->image);

        $response = [
            'filename' => $file,
            'web_url' => url('/storage/_temp/'.$file)
        ];

        return response()->json($response);
    }

    public function destroy($file)
    {
        TemporaryFile::removeImage($file);

        return response()->json('success');
    }
}
