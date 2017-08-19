<?php

use Illuminate\Database\Seeder;

class KeywordsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $keywords = [
            ['keyword' => 'makan'],
            ['keyword' => 'kopi'],
            ['keyword' => 'salon'],
            ['keyword' => 'spa'],
            ['keyword' => 'barbershop'],
            ['keyword' => 'futsal'],
            ['keyword' => 'gym'],
            ['keyword' => 'bakso'],
            ['keyword' => 'nasi goreng']
        ];

        foreach ($keywords as $keyword) {
            \App\Models\Keyword::create($keyword);
        }
    }
}
