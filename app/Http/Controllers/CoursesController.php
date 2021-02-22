<?php

namespace App\Http\Controllers;

use App\Models\AcademicYear;
use App\Models\Course;
use App\Models\Semester;
use App\Models\SemesterLevelCourse;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

/**
 * Class LessonsController
 * @package App\Http\Controllers
 * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
 */
class CoursesController extends Controller
{
    /**
     * @param Request $request
     * @return LengthAwarePaginator
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function index(Request $request): LengthAwarePaginator
    {
        $currentYearCourses = DB::select("
            select levels.name,
                   semester_level_course.course_ids
            from semester_level_course
            left join semesters on semester_level_course.semester_id = semesters.id
            left join levels on semester_level_course.level_id = levels.id
            left join academic_years on semesters.academic_year_id = academic_years.id
            where academic_years.current = 1;
        ");

        $courses = Course::with('teacher');

        if (Auth::user()->hasRole('teacher')) {
            $courses->where('teacher_id', Auth::user()->id);
        }

        $courses = $courses->withCount('lessons')->paginate((int)$request->input('per_page', 10));

        foreach ($courses->items() as $item) {
            $levels = array_filter($currentYearCourses, function ($currentYearCourse) use ($item) {
                if (in_array($item->id, json_decode($currentYearCourse->course_ids))) {
                    return true;
                }

                return false;
            });

            $level_names = [];

            foreach ($levels as $level) {
                if (in_array($level->name, $level_names)) {
                    continue;
                }

                $level_names[] = $level->name;
            }

            $item->level_names = $level_names;
        }

        return $courses;
    }

    /**
     * @param int $courseId
     * @return Course
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function edit(int $courseId): Course
    {
        return Course::with(['teacher', 'doctrine'])->findOrFail($courseId);
    }

    /**
     * @param Request $request
     * @return Response
     * @throws ValidationException
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function store(Request $request): Response
    {
        $this->validateRequest($request);

        $course = new Course($this->attributes($request->all()));

        $course->save();

        return response([], 204);
    }

    /**
     * @param int $courseId
     * @param Request $request
     * @return Application|ResponseFactory|Response
     * @throws ValidationException
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function update(int $courseId, Request $request)
    {
        $this->validateRequest($request);

        $course = Course::findOrFail($courseId);

        $course->fill($this->attributes($request->all()));

        $course->save();

        return response([], 204);
    }

    /**
     * @param int $courseId
     * @return Application|ResponseFactory|Response
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function delete(int $courseId)
    {
        $course = Course::findOrFail($courseId);

        $course->delete();

        return response([], 204);
    }

    /**
     * @param Request $request
     * @throws ValidationException
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    private function validateRequest(Request $request)
    {
        $this->validate($request, [
            'description' => ['string', 'min:3'],
            'doctrine_id' => ['required', 'numeric'],
            'name'        => ['required', 'string', 'min:3', 'max:150'],
            'teacher_id'  => ['required', 'integer']
        ]);
    }

    /**
     * @param array $request
     * @return array
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    private function attributes(array $request): array
    {
        return [
            'name'        => $request['name'],
            'description' => $request['description'],
            'teacher_id'  => $request['teacher_id'],
            'doctrine_id' => $request['doctrine_id'] > 0 ? $request['doctrine_id'] : null
        ];
    }
}
