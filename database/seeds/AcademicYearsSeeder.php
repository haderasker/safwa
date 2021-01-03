<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AcademicYearsSeeder extends Seeder
{
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('academic_years')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('academic_years')->insert([
            [
                'id'   => 1,
                'label' => 'year one'
            ],
            [
                'id'   => 2,
                'label' => 'year two'
            ],
            [
                'id'   => 3,
                'label' => 'year three'
            ],
        ]);
    }
}
