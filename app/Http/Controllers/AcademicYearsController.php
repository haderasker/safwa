<?php

namespace App\Http\Controllers;

use App\Models\AcademicYear;
use App\Models\Course;
use App\Models\Semester;
use App\Models\SemesterLevelCourse;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

/**
 * Class AcademicYearsController
 * @package App\Http\Controllers
 * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
 */
class AcademicYearsController extends Controller
{
    /**
     * @return LengthAwarePaginator
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function index(): LengthAwarePaginator
    {
        return AcademicYear::with('semesters')->paginate(request()->input('par_page'));
    }

    /**
     * @param int $yearId
     * @return Builder|Builder[]|Collection|Model|null
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function edit(int $yearId)
    {
        return AcademicYear::with('semesters')->findOrFail($yearId)->toArray();
    }

    /**
     * @param Request $request
     * @return array
     * @throws ValidationException
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function store(Request $request): array
    {
        $this->validateRequest($request);

        DB::transaction(function() use($request) {
            // create academic year
            $year = new AcademicYear(['label' => $request->input('label')]);
            $year->save();

            // create semesters
            foreach ($request->input('semesters') as $semesterData) {
                $semester = new Semester([
                    'label'            => $semesterData['label'],
                    'academic_year_id' => $year->id,
                    'start'            => $semesterData['start'],
                    'end'              => $semesterData['end']
                ]);
                $semester->save();

                // assign courses
                foreach ($semesterData['levels'] as $levelData) {
                    $assign = new SemesterLevelCourse([
                        'semester_id' => $semester->id,
                        'level_id'    => $levelData['id'],
                        'course_ids'  => json_encode($levelData['course_ids']),
                    ]);
                    $assign->save();
                }
            }
        });

        return [];
    }

    /**
     * @param Request $request
     * @param int $yearId
     * @return array
     * @throws ValidationException
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function update(Request $request, int $yearId)
    {
        $this->validateRequest($request);

        DB::transaction(function() use($request, $yearId) {
            // update academic year
            $year = AcademicYear::find($yearId);

            $year->label = $request->input('label');

            $year->save();

            // update semesters
            foreach ($request->input('semesters') as $semesterData) {
                $semester = Semester::find($semesterData['id']);

                $semester->label = $semesterData['label'];
                $semester->start = $semesterData['start'];
                $semester->end = $semesterData['end'];

                $semester->save();

                // delete old level_courses
                SemesterLevelCourse::where('semester_id',  $semester->id)->delete();

                // create new level_courses
                foreach ($semesterData['levels'] as $levelData) {
                    $assign = new SemesterLevelCourse([
                        'semester_id' => $semester->id,
                        'level_id'    => $levelData['id'],
                        'course_ids'  => json_encode($levelData['course_ids']),
                    ]);
                    $assign->save();
                }
            }
        });

        return [];

    }

    /**
     * @param Request $request
     * @throws ValidationException
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    private function validateRequest(Request $request)
    {
        $this->validate($request, [
            'label'                             => ['required', 'string', 'min:3', 'max:200'],
            'semesters'                         => ['required', 'array', 'min:2', 'max:2'],
            'semesters.*.label'                 => ['required', 'string', 'min:3', 'max:200'],
            'semesters.*.start'                 => ['required', 'date_format:Y-m-d'],
            'semesters.*.end'                   => ['required', 'date_format:Y-m-d'],
            'semesters.*.levels'                => ['required', 'array', 'min:4', 'max:4'],
            'semesters.*.levels.*.id'           => ['required', 'integer'],
            'semesters.*.levels.*.course_ids'   => ['required', 'array'],
            'semesters.*.levels.*.course_ids.*' => ['required', 'integer'],
        ]);
    }
}
