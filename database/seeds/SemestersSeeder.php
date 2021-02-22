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
                'label'            => 'الترم الاول للفرقه الاولي',
                'academic_year_id' => 1,
                'start'            => now(),
                'end'              => now()
            ],
            [
                'id'               => 2,
                'label'            => 'الترم الثاني للفرقه الاولي',
                'academic_year_id' => 1,
                'start'            => now(),
                'end'              => now()
            ],
//            [
//                'id'               => 3,
//                'label'            => 'الترم الاول للفرقه الثانيه',
//                'academic_year_id' => 2,
//                'start'            => now(),
//                'end'              => now()
//            ],
//            [
//                'id'               => 4,
//                'label'            => 'الترم الثاني للفرقه الثانيه',
//                'academic_year_id' => 2,
//                'start'            => now(),
//                'end'              => now()
//            ]
        ]);
    }
}
