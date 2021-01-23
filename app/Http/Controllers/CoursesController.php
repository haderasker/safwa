<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
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
        return Course::with('teacher')->paginate($request->input('per_page', 10));
    }

    /**
     * @param int $courseId
     * @return Course
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function edit(int $courseId): Course
    {
        return Course::with(['teacher'])->findOrFail($courseId);
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
            'doctrine' => ['required', 'string', 'in:الحنبلي,الشافعي,المالكي,الحنفي'],
//            'max_score' => ['required', 'integer'],
//            'min_score' => ['required', 'integer'],
            'name' => ['required', 'string', 'min:3', 'max:150'],
            'teacher_id' => ['required', 'integer']
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
            'name' => $request['name'],
            'description' => $request['description'],
//            'max_score' => $request['max_score'],
//            'min_score' => $request['min_score'],
            'teacher_id' => $request['teacher_id'],
            'doctrine' => $request['doctrine']
        ];
    }
}
