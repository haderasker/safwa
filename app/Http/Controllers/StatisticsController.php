<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\User;
use App\Models\UserCourse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StatisticsController extends Controller
{
    public function admin(): array
    {
        return [
            'totalStudents'      => $this->getTotalStudents(),
            'totalGraduates'     => $this->getLevelStudents(5),
            'levelOneStudents'   => $this->getLevelStudents(1),
            'levelTwoStudents'   => $this->getLevelStudents(2),
            'levelThreeStudents' => $this->getLevelStudents(3),
            'levelFourStudents'  => $this->getLevelStudents(4),
            'doctrineShafi'      => $this->getDoctrineCount(1),
            'doctrineMaliki'     => $this->getDoctrineCount(2),
            'doctrineHanafi'     => $this->getDoctrineCount(3),
            'doctrineHanbali'    => $this->getDoctrineCount(4),
        ];
    }

    public function teacher(): array
    {
        return Course::select('id', 'name')->with('media')->withCount('lessons')->where('teacher_id', Auth::user()->id)->get()->toArray();
    }

    public function student(): array
    {
        $courses = [];
        $lessons = [];
        $rowCourses = UserCourse::with([
            'course' => function ($query) {
                $query->select('id', 'name');
                $query->withCount('lessons');
                $query->with('lessons');
            }
        ])->where('user_id', Auth::user()->id)->get();

        $rowCourses->map(function ($course) use (&$courses, &$lessons) {
            $courses[] = [
                'id'            => $course->course->id,
                'name'          => $course->course->name,
                'lessons_count' => $course->course->lessons_count,
                'avatar'        => $course->course->media()->first()
            ];

            if (!$course->course->lessons) {
                return [];
            }

            $course->course->lessons->map(function ($lesson) use (&$lessons, $course) {
                $lessons[] = [
                    'id'          => $lesson->id,
                    'label'       => $lesson->label,
                    'course_name' => $course->course->name,
                    'avatar'      => $lesson->media()->first()
                ];
            });

            return [];
        });


        return [
            'courses' => $courses,
            'lessons' => $lessons
        ];
    }

    private function getTotalStudents(): int
    {
        return User::role('student')->count();
    }

    private function getLevelStudents($level): int
    {
        return User::where('level_id', $level)->count();
    }

    public function getDoctrineCount($doctrine): int
    {
        return User::where('doctrine_id', $doctrine)->count();
    }

}
