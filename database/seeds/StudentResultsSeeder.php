<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentResultsSeeder extends Seeder
{
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('students_results')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // create test users
        DB::table('students_results')->insert([
            [
                'id' => 1,
                'student_id' => 3,
                'level_id' => 1,
                'academic_year_id' => 1,
                'semester_one_score' => 10,
                'semester_two_score' => 30
            ]
        ]);
    }
}
