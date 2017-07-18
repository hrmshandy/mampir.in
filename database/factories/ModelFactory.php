<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Models\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Models\Province::class, function(Faker\Generator $faker) {
    return [
        'name' => $faker->state
    ];
});

$factory->define(App\Models\City::class, function(Faker\Generator $faker) {
    return [
        'province_id' => factory(App\Models\Province::class)->create()->id,
        'name' => $faker->city
    ];
});

$factory->define(App\Models\Venue::class, function(Faker\Generator $faker) {
    return [
        'name' => $faker->sentence(3),
        'city_id' => factory(App\Models\City::class)->create()->id,
        'area' => $faker->streetName,
        'address' => $faker->address,
        'lat' => $faker->latitude,
        'lng' => $faker->longitude,
        'status' => 1
    ];
});


$factory->define(App\Models\Review::class, function(Faker\Generator $faker) {
    return [
        'user_id' => factory(App\Models\User::class)->create()->id,
        'rating' => rand(1, 5),
        'content' => $faker->paragraph,
        'status' => 1
    ];
});