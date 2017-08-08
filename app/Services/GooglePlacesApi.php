<?php


namespace App\Services;


use App\Models\Review;
use Carbon\Carbon;
use GuzzleHttp\Client;
use GuzzleHttp\TransferStats;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class GooglePlacesApi
{
    const BASE_URL = 'https://maps.googleapis.com/maps/api/place/';
    const TEXT_SEARCH_URL = 'textsearch/json';
    const NEARBY_SEARCH_URL = 'nearbysearch/json';
    const DETAILS_SEARCH_URL = 'details/json';

    protected $key;
    protected $client;

    protected $user_id;

    public function __construct()
    {
        if(JWTAuth::getToken()){
            $this->user_id = JWTAuth::parseToken()->toUser()->id;
        } else{
            $this->user_id = 0;
        }
        $this->key = config('services.google-map.key');
        $this->client = new Client([
            'base_uri' => self::BASE_URL,
        ]);
    }

    public function textSearch(Request $request)
    {
        $response = $this->makeRequest(self::TEXT_SEARCH_URL, $request->all());

        return $this->buildSearchResponse($request, $response);
    }

    public function nearbySearch(Request $request)
    {

        $response = $this->makeRequest(self::NEARBY_SEARCH_URL, $request->all());

        return $this->buildSearchResponse($request, $response);
    }


    public function get($place_id, $params = [])
    {

        $params['placeid'] = $place_id;
        $response = $this->makeRequest(self::DETAILS_SEARCH_URL, $params);

        $detail = $response['result'];

        if(!empty($detail)) {
            $reviews = $this->reviews($detail);
            $myReview = $this->myReview($detail);
            if(!empty($myReview)) {
                $reviews['ratings'][$myReview->rating]++;
            }
            $data = [
                "id" => $detail['place_id'],
                "name" => $detail['name'],
                "address" => $this->getAddress($detail['formatted_address']),
                "lat" => $detail['geometry']['location']['lat'],
                "lng" => $detail['geometry']['location']['lng'],
                "detail" => [
                    'phone_number' => $this->exists($detail, 'international_phone_number'),
                    'email' => $this->exists($detail, 'email'),
                    'website' => $this->exists($detail, 'website')
                ],
                "photos" => $this->photos($detail),
                "reviews" => $reviews['reviews'],
                "ratings" => $reviews['ratings'],
                "myReview" => $myReview,
                "rating" => $detail['rating'],
                'type' => 'google'
            ];

            return $data;
        }

    }

    protected function makeRequest($uri, $params)
    {
        $options = [
            'query' => [
                'key' => $this->key,
            ],
        ];

        $options['query'] = array_merge($options['query'], $params);

        $response = json_decode($this->client->get($uri, $options)->getBody()->getContents(), true);

        return $response;
    }

    protected function toCollection(array $data)
    {
        return collect($data);
    }

    protected function normalizeQuery($query)
    {
        return str_replace(" ","+", $query);
    }

    protected function buildSearchResponse(Request $request, $data)
    {
        $result = [
            'next_page_url' => isset($data['next_page_token']) ? $request->url().'?pagetoken='.$data['next_page_token'] : null,
            'data' => $this->formatData($data['results'])
        ];

        return response()->json($result);
    }

    protected function formatData($data)
    {
        return collect($data)->map(function($item){
            $data = [
                'id' => $item['place_id'],
                "name" => $item['name'],
                "short_address" => $this->getShortAddress($item),
                "lat" => $item['geometry']['location']['lat'],
                "lng" => $item['geometry']['location']['lng'],
                'cover' => $this->getCover($item),
                'details_url' => url('api/venue/g/'.$item['place_id']),
                //'rating' => $this->getRating($item['place_id'])
            ];

            return $data;
        });
    }

    protected function photos($detail) {
        if(isset($detail['photos'])){
            return collect($detail['photos'])->map(function($photo){
                return $this->getPhotoURL($photo);
            })->take(5)->all();
        }
        return [];
    }

    protected function reviews($detail) {
        $result = [
            'reviews' => [],
            'ratings' => [
                5 => 0,
                4 => 0,
                3 => 0,
                2 => 0,
                1 => 0
            ]
        ];
        if(isset($detail['reviews'])) {
            $local_reviews = Review::with('user')->where('google_id', $detail['place_id'])
                                    ->where('user_id', "<>", $this->user_id)
                                    ->orderBy('created_at', 'desc')->get()
                                    ->each(function ($item, $key) use(&$result) {
                                        if($item->rating > 0)
                                            $result['ratings'][$item->rating]++;
                                    })->toArray();
            $result['reviews'] = collect($detail['reviews'])->map(function($item) use(&$result){
                if(!empty($item['text'])) {
                    if($item['rating'] > 0)
                        $result['ratings'][$item['rating']]++;
                    return [
                        'rating' => $item['rating'],
                        'content' => $item['text'],
                        'status' => 2,
                        'photos' => [],
                        'user' => [
                            'name' => $item['author_name'],
                            'email' => str_random(10).'@mail.com',
                            'password' => 'secret',
                            'fake' => 1,
                            'avatar' => $item['profile_photo_url']
                        ]
                    ];
                }

            })->merge($local_reviews)->filter()->all();
        }
        return $result;
    }

    protected function getRating($place_id)
    {
        return Cache::remember('rating-'.$place_id, 3600, function () use($place_id) {
            $response = $this->makeRequest(self::DETAILS_SEARCH_URL, ['placeid' => $place_id]);

            if($response['result']) {
                return isset($response['result']['rating']) ?? $response['result']['rating'];
            }

            return 0;
        });

    }

    protected function getCover($data) {
        if(isset($data['photos'])){
            $ref = $data['photos'][0]['photo_reference'];
            return self::BASE_URL.'photo?maxwidth=300&photoreference='.$ref.'&key='.$this->key;
        }
        return null;
    }

    protected function getShortAddress($data)
    {
        if(isset($data['formatted_address'])) {
            return explode(',', $data['formatted_address'])[0];
        }
        return '';
    }

    protected function getAddress($string)
    {
        $arr = explode(',', $string);
        $address = array_splice($arr, 0, 3);
        return implode(', ', $address);
    }

    protected function exists($data, $key)
    {
        return isset($data[$key]) ? $data[$key] : null;
    }

    protected function getDay($data, $key)
    {
        if(isset($data[$key])) {
            return isset($data[$key]['day']) ? $data[$key]['day'] : null;
        }
        return null;
    }

    protected function getTime($data, $key)
    {
        if(isset($data[$key])) {
            return isset($data[$key]['time']) ? (new Carbon($data[$key]['time']))->toTimeString() : null;
        }
        return null;
    }

    protected function getDateTime($value)
    {
        return isset($value) ? Carbon::createFromTimestamp($value)->toDateTimeString() : Carbon::now();
    }

    protected function getPhotoURL($photo)
    {
        $ref = $photo['photo_reference'];
        return self::BASE_URL.'photo?maxwidth=800&photoreference='.$ref.'&key='.$this->key;;

    }

    protected function myReview($detail)
    {
        $myReview =  Review::with('user')
            ->where('user_id', $this->user_id)
            ->where('google_id', $detail['place_id'])
            ->first();
        return $myReview;
    }
}