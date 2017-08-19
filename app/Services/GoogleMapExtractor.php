<?php

namespace App\Services;

use Carbon\Carbon;
use App\Models\Venue;
use Illuminate\Http\Request;

class GoogleMapExtractor
{
	protected static $key = "AIzaSyDxu7mv5mlPM9Aj2CiYKFWY9b6adizdC4c";

	protected static $baseUrl = 'https://maps.googleapis.com/maps/api/place';

	public static function search(Request $request)
	{
	    $results = [];
		$query = self::buildQuery($request->only(['query', 'area', 'city']));
		$url = self::$baseUrl."/textsearch/json?query=".$query."&key=".self::$key;
		$raw = file_get_contents($url);
		$json = json_decode($raw, true);

		return collect($json['results'])->map(function($place) {
            $data = [
                "name" => $place['name'],
                "address" => self::getAddress($place['formatted_address']),
                "lat" => $place['geometry']['location']['lat'],
                "lng" => $place['geometry']['location']['lng'],
                "detail" => [],
                "opening_hours" => [],
                "photos" => [],
                "reviews" => []
            ];

            $data['exists'] = self::hasVenue($data);

            $rawDetail = file_get_contents(self::$baseUrl."/details/json?placeid=".$place["place_id"]."&key=".self::$key);
            $detail_json = json_decode($rawDetail, true);
            if(isset($detail_json['result'])) {
                $detail = $detail_json['result'];

                $data['detail'] = [
                    'phone_number' => self::exists($detail, 'international_phone_number'),
                    'email' => self::exists($detail, 'email'),
                    'website' => self::exists($detail, 'website')
                ];

                $data['opening_hours'] = self::opening_hours($detail);
                $data['photos'] = self::photos($detail);
                $data['reviews'] = self::reviews($detail);
            }

            return $data;
        })->all();
	}

	protected static function opening_hours($detail) {
		if(isset($detail['opening_hours'])) {
			return collect($detail['opening_hours']['periods'])->map(function($item){
				return [
				    'day' => self::getDay($item, 'open'),
				    'open' => self::getTime($item, 'open'),
				   	'close' => self::getTime($item, 'close')
				];
			})->all();
		}
		return [];
	}

	protected static function photos($detail) {
		if(isset($detail['photos'])){
			return collect($detail['photos'])->map(function($photo){
				return self::getPhotoURL($photo);
			})->take(5)->all();
		}
		return [];
	}

	protected static function reviews($detail) {
		if(isset($detail['reviews'])) {
		    return collect($detail['reviews'])->map(function($item){
		        if(!empty($item['text'])) {
                    return [
                        'rating' => $item['rating'],
                        'content' => $item['text'],
                        'status' => 2,
                        'user' => [
                            'name' => $item['author_name'],
                            'email' => str_random(10).'@mail.com',
                            'password' => 'secret',
                            'fake' => 1
                        ]
                    ];
                }

            })->all();
		}
		return [];
	}

	protected static function exists($data, $key)
	{
		return isset($data[$key]) ? $data[$key] : null;
	}

	protected static function getDay($data, $key)
	{
		if(isset($data[$key])) {
			return isset($data[$key]['day']) ? $data[$key]['day'] : null;
		}
		return null;
	}

	protected static function getTime($data, $key)
	{
		if(isset($data[$key])) {
			return isset($data[$key]['time']) ? (new Carbon($data[$key]['time']))->toTimeString() : null;
		}
		return null;
	}

	protected static function getDateTime($value)
	{
		return isset($value) ? Carbon::createFromTimestamp($value)->toDateTimeString() : Carbon::now();
	}

	protected static function getPhotoURL($photo)
	{
		$ref = $photo['photo_reference'];
		return self::$baseUrl.'/photo?maxwidth=800&photoreference='.$ref.'&key='.self::$key;

	}

    protected static function hasVenue($data)
    {
        $attr = collect($data)->only(['name', 'address'])->all();
        $venue = Venue::where($attr)->first();

        return count($venue) > 0;
	}

    protected static function buildQuery($params)
    {
        $queryString = implode(',', $params);
        return str_replace(" ","+", $queryString);
	}

    protected static function getAddress($string)
    {
        $arr = explode(',', $string);
        $address = array_splice($arr, 0, 3);
        return implode(', ', $address);
	}
}
