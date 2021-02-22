<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NotificationsSeeder extends Seeder
{
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('notifications')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // create test users
//        DB::table('notifications')->insert([
//            [
//                'id'      => 1,
//                'user_id' => 1,
//                'title'   => 'notification 1',
//                'body'    => 'i am a notification',
//                'sent_at' => now()->subHours(1),
//            ],
//            [
//                'id'      => 2,
//                'user_id' => 2,
//                'title'   => 'notification 2',
//                'body'    => 'i am a notification',
//                'sent_at' => now()->subHours(2),
//            ],
//            [
//                'id'      => 3,
//                'user_id' => 2,
//                'title'   => 'notification 3',
//                'body'    => 'i am a notification',
//                'sent_at' => now()->subHours(3),
//            ],
//            [
//                'id'      => 4,
//                'user_id' => 1,
//                'title'   => 'notification 4',
//                'body'    => 'i am a notification',
//                'sent_at' => now()->subHours(4),
//            ],
//            [
//                'id'      => 5,
//                'user_id' => 1,
//                'title'   => 'notification 5',
//                'body'    => 'i am a notification',
//                'sent_at' => now()->subHours(5),
//            ],
//            [
//                'id'      => 6,
//                'user_id' => 1,
//                'title'   => 'notification 6',
//                'body'    => 'i am a notification',
//                'sent_at' => now()->subHours(6),
//            ],
//            [
//                'id'      => 7,
//                'user_id' => 1,
//                'title'   => 'notification 7',
//                'body'    => 'i am a notification',
//                'sent_at' => now()->subHours(7),
//            ],
//            [
//                'id'      => 8,
//                'user_id' => 1,
//                'title'   => 'notification 8',
//                'body'    => 'i am a notification',
//                'sent_at' => now()->subHours(8),
//            ],
//        ]);
    }
}
