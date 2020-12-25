<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExamsSeeder extends Seeder
{
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('exams')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // create test users
        DB::table('exams')->insert([
        ]);
    }
}
