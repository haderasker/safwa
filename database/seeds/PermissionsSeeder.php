<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\DB;

class PermissionsSeeder extends Seeder
{
    /**
     * Create the initial roles and permissions.
     *
     * @return void
     */
    public function run()
    {
        $now = now();

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('role_has_permissions')->truncate();
        DB::table('roles')->truncate();
        DB::table('permissions')->truncate();
        DB::table('model_has_roles')->truncate();
        DB::table('model_has_permissions')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // create Roles
        $admin = Role::firstOrCreate(['name' => 'admin']);
        $teacher = Role::firstOrCreate(['name' => 'teacher']);
        $student = Role::firstOrCreate(['name' => 'student']);

        DB::table('model_has_roles')->insert([
            [
                'role_id' => 1,
                'model_type' => 'App\\Models\\User',
                'model_id' => 1
            ],
            [
                'role_id' => 2,
                'model_type' => 'App\\Models\\User',
                'model_id' => 2
            ],
            [
                'role_id' => 3,
                'model_type' => 'App\\Models\\User',
                'model_id' => 3
            ]
        ]);
    }
}
