<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SemestersSeeder extends Seeder
{
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('semesters')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('semesters')->insert([
            [
                'id'               => 1,
                'label'            => 'semester one for year one',
                'academic_year_id' => 1,
                'start'            => now(),
                'end'              => now()
            ],
            [
                'id'               => 2,
                'label'            => 'semester two for year one',
                'academic_year_id' => 1,
                'start'            => now(),
                'end'              => now()
            ],
            [
                'id'               => 3,
                'label'            => 'semester one for year two',
                'academic_year_id' => 2,
                'start'            => now(),
                'end'              => now()
            ],
            [
                'id'               => 4,
                'label'            => 'semester two for year two',
                'academic_year_id' => 2,
                'start'            => now(),
                'end'              => now()
            ],
            [
                'id'               => 5,
                'label'            => 'semester one for year three',
                'academic_year_id' => 3,
                'start'            => now(),
                'end'              => now()
            ],
            [
                'id'               => 6,
                'label'            => 'semester two for year three',
                'academic_year_id' => 3,
                'start'            => now(),
                'end'              => now()
            ]
        ]);
    }
}
