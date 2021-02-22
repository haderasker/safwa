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
//        DB::table('courses')->insert([
//            [
//                'id' => 1,
//                'name' => 'ماده الفقه',
//                'description' => 'تفاصييل',
//                'teacher_id' => 2,
//                'doctrine' => 'الحنبلي'
//            ],
//            [
//                'id' => 2,
//                'name' => 'ماده العقيده',
//                'description' => 'تفاصييل',
//                'teacher_id' => 2,
//                'doctrine' => 'الشافعي'
//            ],
//            [
//                'id' => 3,
//                'name' => 'ماده اللغه العربيه',
//                'description' => 'تفاصييل',
//                'teacher_id' => 2,
//                'doctrine' => 'المالكي'
//            ],
//            [
//                'id' => 4,
//                'name' => 'ماده التفسير',
//                'description' => 'تفاصييل',
//                'teacher_id' => 2,
//                'doctrine' => 'الحنفي'
//            ],
//        ]);
    }
}
