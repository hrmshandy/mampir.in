<?php

namespace App\Http\Controllers;

use App\Models\Media;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class MediaController extends Controller
{

    public function getSource($url)
    {
        $client = new Client();
        $response = [
            'status' => '',
            'data' => ''
        ];

        $res = $client->request('GET', 'https://api.instagram.com/oembed?url='.$url);
        $data = json_decode($res->getBody(), true);
        $data['source_url'] = $url;

        $response['data'] = Media::firstOrCreate($data);
        $response['status'] = 'success';

        try {
            $res = $client->request('GET', 'https://api.instagram.com/oembed?url='.$url);
            $data = json_decode($res->getBody(), true);
            $data['source_url'] = $url;

            $response['data'] = Media::firstOrCreate($data);
            $response['status'] = 'success';

        } catch (\Exception $exception) {
            $response['status'] = 'error';
        }

        return response()->json($response);
    }

    public function show($id)
    {
        $media = Media::find($id)->toArray();

        return view('embed', $media);
    }
}
