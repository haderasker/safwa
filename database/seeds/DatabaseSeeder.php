<?php

use Database\Seeders\PermissionsSeeder;
use Database\Seeders\UsersSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function run()
    {
        $this->call(PermissionsSeeder::class);
        $this->call(UsersSeeder::class);
    }
}
