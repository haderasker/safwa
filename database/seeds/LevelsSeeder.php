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
                'name' => 'الفرقه الاولي'
            ],
            [
                'id' => 2,
                'name' => 'الفرقه الثانيه'
            ],
            [
                'id' => 3,
                'name' => 'الفرقه الثالثه'
            ],
            [
                'id' => 4,
                'name' => 'الفرقه الرابعه'
            ],
        ]);
    }
}
