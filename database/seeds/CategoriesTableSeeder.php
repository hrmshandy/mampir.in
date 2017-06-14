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
            ['name' => 'Hiburan', 'slug' => 'hiburan'],
            ['name' => 'Salon', 'slug' => 'salon'],
            ['name' => 'Barbershop', 'slug' => 'barbershop'],
            ['name' => 'Olahraga', 'slug' => 'olahraga']
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
