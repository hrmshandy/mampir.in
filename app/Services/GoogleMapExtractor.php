<?php

namespace App\Services;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Photo;
use App\Models\Venue;
use App\Models\Review;
use App\Models\Category;
use App\Models\OpeningHour;
use App\Models\VenueDetail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Cache;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;

class GoogleMapExtractor
{
	protected static $key = "AIzaSyDxu7mv5mlPM9Aj2CiYKFWY9b6adizdC4c";

	public static function get($category, $query = null)
	{
	    $results = [];
		$query = str_replace(" ","+", $query);
		$url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=".$query."&key=".self::$key;
		$raw = file_get_contents($url);
		$json = json_decode($raw, true);

		foreach ($json['results'] as $place) {
			$data = [
				"name" => $place['name'],
				"slug" => Str::slug($place['name']),
				"address" => $place['formatted_address'],
				"lat" => $place['geometry']['location']['lat'],
				"lng" => $place['geometry']['location']['lng'],
                "details" => [],
                "opening_hours" => [],
                "place_photos" => [],
                "place_reviews" => []
			];

			$rawDetail = file_get_contents("https://maps.googleapis.com/maps/api/place/details/json?placeid=".$place["place_id"]."&key=".self::$key);
			$detail_json = json_decode($rawDetail, true);
			if(isset($detail_json['result'])) {
				$detail = $detail_json['result'];

				$data['details'] = [
				    'phone_number' => self::exists($detail, 'international_phone_number'),
				    'email' => self::exists($detail, 'email'),
				    'website' => self::exists($detail, 'website')
				];

				$data['opening_hours'] = self::opening_hours($detail);
				$data['place_photos'] = self::photos($detail);
				$data['place_reviews'] = self::reviews($detail);
			}

			$results[] = $data;
		}

		return $results;
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
			return $detail['reviews'];
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
		return 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photoreference='.$ref.'&key='.self::$key;

	}
}
