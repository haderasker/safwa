<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LessonsSeeder extends Seeder
{
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('lessons')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // create test users
//        DB::table('lessons')->insert([
//            [
//                'id' => 1,
//                'course_id' => 2,
//                'label' => 'الدرس الاول',
//                'youtube' => 'https://www.youtube.com/watch?v=Shfi_tCSYrE&ab_channel=ChessSchool',
//                'soundcloud' => 'https://soundcloud.com/aboveandbeyond/group-therapy-412-with-above',
//                'pdf' => 'url to pds file',
//                'published_at' => now()->addDays(10),
//            ],
//            [
//                'id' => 2,
//                'course_id' => 2,
//                'label' => 'الدرس الثاني',
//                'youtube' => 'https://www.youtube.com/watch?v=Shfi_tCSYrE&ab_channel=ChessSchool',
//                'soundcloud' => 'https://soundcloud.com/aboveandbeyond/group-therapy-412-with-above',
//                'pdf' => 'url to pds file',
//                'published_at' => now()->addDays(11),
//            ],
//            [
//                'id' => 3,
//                'course_id' => 2,
//                'label' => 'الدرس الثالث',
//                'youtube' => 'https://www.youtube.com/watch?v=Shfi_tCSYrE&ab_channel=ChessSchool',
//                'soundcloud' => 'https://soundcloud.com/aboveandbeyond/group-therapy-412-with-above',
//                'pdf' => 'url to pds file',
//                'published_at' => now()->addDays(12),
//            ],
//            [
//                'id' => 4,
//                'course_id' => 2,
//                'label' => 'الدرس الرابع',
//                'youtube' => 'https://www.youtube.com/watch?v=Shfi_tCSYrE&ab_channel=ChessSchool',
//                'soundcloud' => 'https://soundcloud.com/aboveandbeyond/group-therapy-412-with-above',
//                'pdf' => 'url to pds file',
//                'published_at' => now()->addDays(13),
//            ],
//        ]);
    }
}
