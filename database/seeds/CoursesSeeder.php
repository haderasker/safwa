<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CoursesSeeder extends Seeder
{
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('courses')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // create test users
        DB::table('courses')->insert([
            [
                'id' => 1,
                'name' => 'course 1',
                'description' => 'desc 1',
                'max_score' => '400',
                'min_score' => '200',
                'teacher_id' => 2,
                'doctrine' => 'hanbali'
            ],
            [
                'id' => 2,
                'name' => 'course 2',
                'description' => 'desc 2',
                'max_score' => '500',
                'min_score' => '300',
                'teacher_id' => 2,
                'doctrine' => 'hanbali'
            ],
            [
                'id' => 3,
                'name' => 'course 3',
                'description' => 'desc 3',
                'max_score' => '600',
                'min_score' => '300',
                'teacher_id' => 2,
                'doctrine' => 'hanbali'
            ],
            [
                'id' => 4,
                'name' => 'course 4',
                'description' => 'desc 4',
                'max_score' => '700',
                'min_score' => '500',
                'teacher_id' => 2,
                'doctrine' => 'hanbali'
            ],
        ]);
    }
}
