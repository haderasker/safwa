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
                'label' => 'shafi'
            ],
            [
                'id' => 2,
                'label' => 'maliki'
            ],
            [
                'id' => 3,
                'label' => 'hanafi'
            ],
            [
                'id' => 4,
                'label' => 'hanbali'
            ],
        ]);
    }
}
