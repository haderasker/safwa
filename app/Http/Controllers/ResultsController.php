<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\StudentExam;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/**
 * Class LevelsController
 * @package App\Http\Controllers
 * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
 */
class ResultsController extends Controller
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

        return StudentExam::with([
            'exam:id,label,score',
            'student:id,name,email'
        ])
            ->when(isset($filters['semester']), function (Builder $query) use ($filters) {
                $semesterCourses = DB::select("
                    select course_ids,
                           semester_id
                    from semester_level_course
                    where semester_id = " . $filters['semester'] . ";
                ");

                $semesterCoursesIds = $this->transformCourses($semesterCourses);

                error_log(print_r($semesterCoursesIds, true));

                $query->whereHas('exam', function (Builder $query) use ($filters, $semesterCoursesIds) {
                    $query->where('testable_type', Course::class)
                        ->whereIn('testable_id', $semesterCoursesIds);
                });
            })
            ->when(isset($filters['search']), function (Builder $query) use ($filters) {
                $query->whereHas('student', function (Builder $query) use ($filters) {
                    $query->where('name', 'like', '%' . $filters['search'] . '%')
                        ->orWhere('email', 'like', '%' . $filters['search'] . '%');
                });
            })
            ->when(isset($filters['level']), function (Builder $query) use ($filters) {
                $query->whereHas('student', function (Builder $query) use ($filters) {
                    $query->where('level_id', $filters['level']);
                });
            })
            ->when(isset($filters['exam_id']), function (Builder $query) use ($filters) {
                $query->where('students_exams.exam_id', $filters['exam_id']);
            })
            ->paginate((int)$request->input('per_page', 10));
    }

    public function extra(int $resultId, Request $request)
    {
        $extra = $request->input('extra', 0);

        StudentExam::findOrFail($resultId)->update([
            'extra' => $extra
        ]);

        return response(null, 204);
    }

    private function transformCourses(array $courses): array
    {
        $results = [];

        foreach ($courses as $course) {
            $course_ids = json_decode($course->course_ids);

            foreach ($course_ids as $course_id) {
                $element = [
                    'semester'  => $course->semester_id,
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
}
