<?php

use Illuminate\Database\Seeder;

class VenuesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [1, 2, 3, 4, 5, 6, 7];
        $numOfCategories = rand(1,7);
        factory(App\Models\Venue::class, 50)->create()->each(function ($v) use($categories, $numOfCategories) {
            $v->categories()->attach(array_rand(array_flip($categories), $numOfCategories));
            $v->reviews()->saveMany(factory(App\Models\Review::class, 10)->make());
        });
    }
}
