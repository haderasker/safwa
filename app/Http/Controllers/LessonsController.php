<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Lesson;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

/**
 * Class LessonsController
 * @package App\Http\Controllers
 * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
 */
class LessonsController extends Controller
{
    /**
     * @param Request $request
     * @return LengthAwarePaginator
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function index(Request $request): LengthAwarePaginator
    {
        return Lesson::with('course')->paginate($request->input('per_page'));
    }

    public function edit(int $lessonId)
    {
        return Lesson::with('course')->findOrFail($lessonId);
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

        $lesson = new Lesson($this->lessonAttributes($request->all()));

        $lesson->save();

        // save Quiz

        return response([], 204);
    }

    public function update(int $lessonId, Request $request)
    {

    }

    /**
     * @param int $lessonId
     * @return Application|ResponseFactory|Response
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function delete(int $lessonId)
    {
        $lesson = Lesson::findOrFail($lessonId);

        $lesson->delete();

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
            'course_id' => ['required', 'integer'],
            'label' => ['required', 'min:3', 'max:150'],
            'published_at' => ['required', 'date_format:Y-m-d H:i'],
            'youtube' => ['nullable', 'regex:/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/'],
            'soundcloud' => ['nullable', 'regex:/^https?:\/\/(soundcloud.com|snd.sc)\/(.*)$/'],
            'pdf' => ['nullable', 'string'],
//            'quiz.*.label' => ['required', 'string', 'min:3', 'max:150'],
//            'quiz.*.answers.*.label' => ['required', 'string', 'min:3', 'max:150'],
//            'quiz.*.answers.*.correct' => ['required', 'boolean']
        ]);
    }

    /**
     * @param array $request
     * @return array
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    private function lessonAttributes(array $request): array
    {
        return [
            'course_id' => $request['course_id'],
            'label' => $request['label'],
            'youtube' => $request['youtube'],
            'soundcloud' => $request['soundcloud'],
            'pdf' => $request['pdf'],
            'published_at' => $request['published_at'],
        ];
    }

}
