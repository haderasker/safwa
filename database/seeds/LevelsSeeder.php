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
                'name' => 'level1'
            ],
            [
                'id' => 2,
                'name' => 'level2'
            ],
            [
                'id' => 3,
                'name' => 'level3'
            ],
            [
                'id' => 4,
                'name' => 'level4'
            ],
            [
                'id' => 5,
                'name' => 'level5'
            ],
        ]);
    }
}
