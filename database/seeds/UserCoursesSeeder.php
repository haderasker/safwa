<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserCoursesSeeder extends Seeder
{
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('users_courses')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // create test users
        DB::table('users_courses')->insert([
            [
                'user_id'   => 3,
                'course_id' => 1,
                'type'      => 'default',
            ],
            [
                'user_id'   => 3,
                'course_id' => 2,
                'type'      => 'default',
            ],
            [
                'user_id'   => 3,
                'course_id' => 3,
                'type'      => 'default',
            ],
            [
                'user_id'   => 3,
                'course_id' => 4,
                'type'      => 'default',
            ],
        ]);
    }
}
