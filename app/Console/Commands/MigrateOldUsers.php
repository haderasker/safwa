<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Models\UserCourse;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use stdClass;

class MigrateOldUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'migrate:users';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(): int
    {
        $users = DB::connection('mysql-old')->table('users')->cursor();

        foreach ($users as $user) {
            $role = $user->role;

            switch (strtolower($role)) {
                case 'admin':
                    $this->migrateAdmin($user);
                    break;
                case 'student':
                    $this->migrateStudent($user);
                    break;
                case 'teacher':
                    $this->migrateTeacher($user);
                    break;
                default:
                    $this->error('role not supported: ' . $role);
            }
        }

        return 0;
    }

    private function migrateStudent(stdClass $student)
    {
        // prepare new user
        $studentArr = $this->prepareNewUser($student, 'student');

        $newStudent = User::firstOrNew([
            'name'  => $student->name,
            'email' => $student->email
        ]);

        $newStudent->fill($studentArr);

        $newStudent->save();

        // assign role
        $newStudent->assignRole('student');

        // assign courses
        $levelTwoCoursesForCurrentYear = DB::connection('mysql')->select("
            select semester_level_course.course_ids
            from semester_level_course
            left join semesters on semester_level_course.semester_id = semesters.id
            left join levels on semester_level_course.level_id = levels.id
            left join academic_years on semesters.academic_year_id = academic_years.id
            where academic_years.current = 1
                and levels.id = 2;
        ");

        $levelTwoCoursesForCurrentYear = array_reduce($levelTwoCoursesForCurrentYear, function ($total, $item) {
            return array_merge($total, json_decode($item->course_ids));
        }, []);

        $levelTwoCoursesForCurrentYear = array_values(array_unique($levelTwoCoursesForCurrentYear));

        $xx = [];

        foreach ($levelTwoCoursesForCurrentYear as $value) {
            $xx[$value] = [
                'type' => 'default'
            ];
        }

        $newStudent->courses()->sync($xx);
    }

    private function migrateAdmin(stdClass $admin)
    {
        // prepare new user
        $adminArr = $this->prepareNewUser($admin, 'admin');

        $newAdmin = User::firstOrNew([
            'name'  => $admin->name,
            'email' => $admin->email
        ]);

        $newAdmin->fill($adminArr);

        $newAdmin->save();

        // assign role
        $newAdmin->assignRole('admin');
    }

    private function migrateTeacher(stdClass $teacher)
    {
        // prepare new user
        $teacherArr = $this->prepareNewUser($teacher, 'teacher');

        $newTeacher = User::firstOrNew([
            'name'  => $teacher->name,
            'email' => $teacher->email
        ]);

        $newTeacher->fill($teacherArr);

        $newTeacher->save();

        // assign role
        $newTeacher->assignRole('teacher');

        //////////////////////////////////////////////////////////////////////
        // if we need to migrate courses or lessons this is the right place //
        //////////////////////////////////////////////////////////////////////
    }

    private function prepareNewUser(stdClass $user, string $role): array
    {
        return [
            'name'           => $user->name,
            'email'          => $user->email,
            'password'       => bcrypt($user->email),
            'level_id'       => $role === 'student' ? 2 : null,
            'upload_lessons' => $role === 'teacher' ? 1 : null
        ];
    }

}
