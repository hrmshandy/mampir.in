<?php

use App\Models\City;
use Illuminate\Database\Seeder;

class CitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cities = [
            ['name' => 'Bandung'],
            ['name' => 'Bogor'],
            ['name' => 'Bekasi'],
            ['name' => 'Balikpapan'],
            ['name' => 'Banjarmasin'],
            ['name' => 'Bandar Lampung'],
            ['name' => 'Batam'],
            ['name' => 'Denpasar'],
            ['name' => 'Depok'],
            ['name' => 'Jakarta Barat'],
            ['name' => 'Jakarta Selatan'],
            ['name' => 'Jakarta Utara'],
            ['name' => 'Makassar'],
            ['name' => 'Malang'],
            ['name' => 'Manado'],
            ['name' => 'Medan'],
            ['name' => 'Padang'],
            ['name' => 'Palembang'],
            ['name' => 'Pekanbaru'],
            ['name' => 'Pontianak'],
            ['name' => 'Samarinda'],
            ['name' => 'Semarang'],
            ['name' => 'Solo'],
            ['name' => 'Surabaya'],
            ['name' => 'Tanggerang'],
            ['name' => 'Yogyakarta']
        ];

        foreach($cities as $city) {
            City::create($city);
        }
    }
}
