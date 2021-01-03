<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SemestersLevelsCoursesSeeder extends Seeder
{
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('semester_level_course')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('semester_level_course')->insert([
            ['id' => 1, 'semester_id' => 1, 'level_id' => 1, 'course_ids' => json_encode([1, 2])],
            ['id' => 2, 'semester_id' => 1, 'level_id' => 2, 'course_ids' => json_encode([3, 4])],
            ['id' => 3, 'semester_id' => 1, 'level_id' => 3, 'course_ids' => json_encode([1, 4])],
            ['id' => 4, 'semester_id' => 1, 'level_id' => 4, 'course_ids' => json_encode([2, 3])],
            ['id' => 5, 'semester_id' => 2, 'level_id' => 1, 'course_ids' => json_encode([1, 2])],
            ['id' => 6, 'semester_id' => 2, 'level_id' => 2, 'course_ids' => json_encode([3, 4])],
            ['id' => 7, 'semester_id' => 2, 'level_id' => 3, 'course_ids' => json_encode([1, 4])],
            ['id' => 8, 'semester_id' => 2, 'level_id' => 4, 'course_ids' => json_encode([2, 3])],
            ['id' => 9, 'semester_id' => 3, 'level_id' => 1, 'course_ids' => json_encode([1, 2])],
            ['id' => 10, 'semester_id' => 3, 'level_id' => 2, 'course_ids' => json_encode([3, 4])],
            ['id' => 11, 'semester_id' => 3, 'level_id' => 3, 'course_ids' => json_encode([1, 4])],
            ['id' => 12, 'semester_id' => 3, 'level_id' => 4, 'course_ids' => json_encode([2, 3])],
            ['id' => 13, 'semester_id' => 4, 'level_id' => 1, 'course_ids' => json_encode([1, 2])],
            ['id' => 14, 'semester_id' => 4, 'level_id' => 2, 'course_ids' => json_encode([3, 4])],
            ['id' => 15, 'semester_id' => 4, 'level_id' => 3, 'course_ids' => json_encode([1, 4])],
            ['id' => 16, 'semester_id' => 4, 'level_id' => 4, 'course_ids' => json_encode([2, 3])],
            ['id' => 17, 'semester_id' => 5, 'level_id' => 1, 'course_ids' => json_encode([1, 2])],
            ['id' => 18, 'semester_id' => 5, 'level_id' => 2, 'course_ids' => json_encode([3, 4])],
            ['id' => 19, 'semester_id' => 5, 'level_id' => 3, 'course_ids' => json_encode([1, 4])],
            ['id' => 20, 'semester_id' => 5, 'level_id' => 4, 'course_ids' => json_encode([2, 3])],
            ['id' => 21, 'semester_id' => 6, 'level_id' => 1, 'course_ids' => json_encode([1, 2])],
            ['id' => 22, 'semester_id' => 6, 'level_id' => 2, 'course_ids' => json_encode([3, 4])],
            ['id' => 23, 'semester_id' => 6, 'level_id' => 3, 'course_ids' => json_encode([1, 4])],
            ['id' => 24, 'semester_id' => 6, 'level_id' => 4, 'course_ids' => json_encode([2, 3])],
        ]);
    }
}
