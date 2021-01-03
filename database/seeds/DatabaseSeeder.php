<?php

use Database\Seeders\PermissionsSeeder;
use Database\Seeders\UsersSeeder;
use Database\Seeders\CoursesSeeder;
use Database\Seeders\LessonsSeeder;
use Database\Seeders\ExamsSeeder;
use Database\Seeders\QuestionsSeeder;
use Database\Seeders\AnswersSeeder;
use Database\Seeders\LevelsSeeder;
use Database\Seeders\AcademicYearsSeeder;
use Database\Seeders\SemestersSeeder;
use Database\Seeders\SemestersLevelsCoursesSeeder;
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
        $this->call(CoursesSeeder::class);
        $this->call(LessonsSeeder::class);
        $this->call(ExamsSeeder::class);
        $this->call(QuestionsSeeder::class);
        $this->call(AnswersSeeder::class);
        $this->call(LevelsSeeder::class);
        $this->call(AcademicYearsSeeder::class);
        $this->call(SemestersSeeder::class);
        $this->call(SemestersLevelsCoursesSeeder::class);
    }
}
