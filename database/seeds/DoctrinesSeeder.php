<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DoctrinesSeeder extends Seeder
{
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('doctrines')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // create test users
        DB::table('doctrines')->insert([
            [
                'id' => 1,
                'label' => 'Shafi'
            ],
            [
                'id' => 2,
                'label' => 'Maliki'
            ],
            [
                'id' => 3,
                'label' => 'Hanafi'
            ],
            [
                'id' => 4,
                'label' => 'Hanbali'
            ],
        ]);
    }
}
