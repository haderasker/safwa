<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AnswersSeeder extends Seeder
{
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('answers')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // create test users
        DB::table('answers')->insert([
        ]);
    }
}
