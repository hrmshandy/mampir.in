<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MediaController extends Controller
{
    public function __invoke($url)
    {
        $client = new \GuzzleHttp\Client();
        $data = [
            "title" => "",
            "html" => ""
        ];
        try {
            $res = $client->request('GET', 'https://api.instagram.com/oembed?url='.$url);
            $data = json_decode($res->getBody(), true);
        } catch (\Exception $exception) {
            //
        }
        return view('embed', $data);
    }
}
