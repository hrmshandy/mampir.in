<?php

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            ['name' => 'Kuliner', 'slug' => 'kuliner'],
            ['name' => 'Relaksasi', 'slug' => 'relaksasi'],
            ['name' => 'Rekreasi', 'slug' => 'rekreasi'],
            ['name' => 'Shopping', 'slug' => 'shopping'],
            ['name' => 'Kecantikan', 'slug' => 'kecantikan'],
            ['name' => 'Barbershop', 'slug' => 'barbershop'],
            ['name' => 'Olahraga', 'slug' => 'olahraga'],
            ['name' => 'Komunitas', 'slug' => 'komunitas'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
