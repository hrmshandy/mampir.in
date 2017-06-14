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
		$query = str_replace(" ","+", $query);
		$url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=".$query."&key=".self::$key;
		$result = file_get_contents($url);
		$json = json_decode($result, true);

		foreach ($json['results'] as $place) {
			$data = [
				"name" => $place['name'],
				"slug" => Str::slug($place['name']),
				"address" => $place['formatted_address'],
				"lat" => $place['geometry']['location']['lat'],
				"lng" => $place['geometry']['location']['lng']
			];

			$key = sha1(json_encode($data));

			$venue = Venue::firstOrCreate($data);

			self::categories($venue, $category, $place);

			$rawDetail = file_get_contents("https://maps.googleapis.com/maps/api/place/details/json?placeid=".$place["place_id"]."&key=".self::$key);
			$detail_json = json_decode($rawDetail, true);
			if(isset($detail_json['result'])) {
				$detail = $detail_json['result'];

				$venue->details()->save(new VenueDetail([
				    'phone_number' => self::exists($detail, 'international_phone_number'),
				    'email' => self::exists($detail, 'email'),
				    'website' => self::exists($detail, 'website')
				]));
				self::opening_hours($venue, $detail);
				self::photos($venue, $detail);
				self::reviews($venue, $detail);
			}
		}
	}

	protected static function categories($venue, $ct, $data) {
		$categories = [];
		$category = Category::where('slug', $ct)->first();
		if(count($category) > 0) {
			$categories[] = $category->id;
		}
		if(isset($data['types'])) {
			$c = $data['types'][0];
			if(preg_match('(premise|point_of_interest|establishment|admin|country)', $c) !== 1) {
				$category2 = Category::firstOrCreate(['name' => Str::title($c), 'slug' => Str::slug($c)]);
				$categories[] = $category2->id;
			}
		}

		if(count($categories) > 0) {
			$venue->categories()->attach($categories);
		}
	}

	protected static function opening_hours($venue, $detail) {
		if(isset($detail['opening_hours'])) {
			$opening_hours = collect($detail['opening_hours']['periods'])->map(function($item){
				return new OpeningHour([
				    'day' => self::getDay($item, 'open'),
				    'open' => self::getTime($item, 'open'),
				   	'close' => self::getTime($item, 'close')
				]);
			})->all();
			$venue->opening_hours()->saveMany($opening_hours);
		}
	}

	protected static function photos($venue, $detail) {
		if(isset($detail['photos'])){
			$photos = collect($detail['photos'])->map(function($photo){
				return new Photo(self::saveImage($photo));
			});
			$venue->photos()->saveMany($photos);
		}
	}

	protected static function reviews($venue, $detail) {
		if(isset($detail['reviews'])) {
			$reviews = collect($detail['reviews'])->map(function($item){
				$user_id = self::getUserId($item['author_url']);
				$email = $user_id.'@mail.com';
				$user = User::whereEmail($email)->first();
				if(count($user) <= 0) {
					$user = User::create([
					    'name' => $item['author_name'],
					    'email' => $email,
					    'password' => $user_id,
					    'avatar' => $item['profile_photo_url'],
					    'fake' => true
					]);
				}
				return new Review([
				    'user_id' => $user->id,
				    'content' => $item['text'],
				    'rating' => round($item['rating']),
				    'created_at' => self::getDateTime($item['time'])
				]);
			});

			$venue->reviews()->saveMany($reviews);
		}
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

	protected static function getUserId($value)
	{
		$raw = explode('/' ,$value);
		$i = count($raw) - 2;
		return $raw[$i];
	}

	protected static function saveImage($photo)
	{
		$ref = $photo["photo_reference"];
		$filename = time().'-'.str_random(16).".jpg";
		$content = file_get_contents("https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photoreference=".$ref."&key=".self::$key);
		$img = Image::make($content);
		Storage::disk('public')->put($filename, (string) $img->encode());
		return compact('filename');

	}
}
