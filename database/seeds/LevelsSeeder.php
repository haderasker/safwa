<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LevelsSeeder extends Seeder
{
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('levels')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // create test users
        DB::table('levels')->insert([
            [
                'id' => 1,
                'name' => 'Level One'
            ],
            [
                'id' => 2,
                'name' => 'Level Two'
            ],
            [
                'id' => 3,
                'name' => 'Level Three'
            ],
            [
                'id' => 4,
                'name' => 'Level Four'
            ],
        ]);
    }
}
