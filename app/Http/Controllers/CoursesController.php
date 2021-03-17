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
        $filters = $request->input('filters', []);
        $sort = $request->input('sort', []);

        $currentYearCourses = DB::select("
            select levels.name,
                   semester_level_course.course_ids
            from semester_level_course
            left join semesters on semester_level_course.semester_id = semesters.id
            left join levels on semester_level_course.level_id = levels.id
            left join academic_years on semesters.academic_year_id = academic_years.id
            where academic_years.current = 1;
        ");

        $currentYearCourses = $this->transformCourses($currentYearCourses);

        if (isset($filters['level']) && !is_null($filters['level'])) {
            $currentYearCourses = array_filter($currentYearCourses, function ($item) use ($filters) {
                return $item['level'] === 'level' . $filters['level'];
            });
        }

        $course_ids = array_unique(
            array_column($currentYearCourses, 'course')
        );

        $courses = Course::with([
            'teacher',
            'media'
        ])
            ->withCount([
                'lessons',
                'students',
                'studentExams as passed_students' => function ($query) {
                    $query->where('exams.testable_type', Course::class)
                        ->where('students_exams.passed', 1);
                },
                'studentExams as failed_students' => function ($query) {
                    $query->where('exams.testable_type', Course::class)
                        ->where('students_exams.passed', '<>', 1);
                }
            ])
            ->whereIn('id', $course_ids)
            ->when(Auth::user()->hasRole('teacher'), function ($query) {
                $query->where('teacher_id', Auth::user()->id);
            })
            ->when(!Auth::user()->hasRole('teacher') && isset($filters['teacher']), function ($query) use ($filters) {
                $query->where('teacher_id', $filters['teacher']);
            })
            ->when(isset($filters['name']), function ($query) use ($filters) {
                $query->where('name', $filters['name']);
            })
            ->when(count($sort), function ($query) use ($sort) {
                foreach ($sort as $item) {
                    $query->orderBy($item['colId'], $item['sort']);
                }
            })
            ->paginate((int)$request->input('per_page', 10));

        foreach ($courses->items() as $item) {
            $level_names = array_unique(
                array_column(
                    array_filter($currentYearCourses, function ($course) use ($item) {
                        return $course['course'] === $item->id;
                    }),
                    'level'
                )
            );

            $item->level_names = $level_names;
        }

        return $courses;
    }

    /**
     * @param array $courses
     * @return array
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    private function transformCourses(array $courses): array
    {
        $results = [];

        foreach ($courses as $course) {
            $course_ids = json_decode($course->course_ids);

            foreach ($course_ids as $course_id) {
                $element = [
                    'level'  => $course->name,
                    'course' => $course_id
                ];
                if (in_array($element, $results)) {
                    continue;
                }

                $results[] = $element;
            }
        }

        return $results;
    }

    /**
     * @param int $courseId
     * @return Course
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function edit(int $courseId): Course
    {
        $course = Course::with(['teacher', 'doctrine'])->findOrFail($courseId);
        $avatar = $course->getMedia('images')->first();
        $course->avatar = $avatar ? $avatar->getUrl() : '';

        return $course;
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
            'name'        => ['required', 'string', 'max:150'],
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
