<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use App\Utils\Convert;
use Carbon\Carbon;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
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
        $lessons = Lesson::with('course');

        if(Auth::user()->hasRole('teacher')) {
            $lessons->whereHas('course', function($query) {
                $query->where('teacher_id', Auth::user()->id);
            });
        }

        return $lessons->paginate((int)$request->input('per_page', 10));
    }

    public function edit(int $lessonId)
    {
        return Lesson::with('course', 'quiz.questions.answers')->findOrFail($lessonId);
    }

    /**
     * @param Request $request
     * @return Response
     * @throws ValidationException
     * @throws \Exception
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function store(Request $request): Response
    {
        $this->validateRequest($request);

        $lesson = new Lesson($this->attributes($request->all()));
        $lesson->save();

        // update request to support exam inputs
        $request->request->add([
            'label'         => $request->input('label'),
            'testable_id'   => $lesson->id,
            'testable_type' => 'lesson',
            'duration'      => 0,
            'published_at'  => Carbon::parse($lesson->created_at)->format('Y-m-d'),
            'ended_at'      => Carbon::parse($lesson->created_at)->format('Y-m-d'),
            'level_id'      => null,
            'type'          => 'default',
        ]);

        // save quiz
        $examsController = resolve(ExamsController::class);
        $examsController->store($request);

        return response([], 204);
    }

    /**
     * @param int $lessonId
     * @param Request $request
     * @return Application|ResponseFactory|Response
     * @throws ValidationException
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function update(int $lessonId, Request $request)
    {
        $this->validateRequest($request);

        $lesson = Lesson::findOrFail($lessonId);
        $lesson->fill($this->attributes($request->all()));
        $lesson->save();

        // update request to support exam inputs
        $request->request->add([
            'label'         => $request->input('label'),
            'testable_id'   => $lesson->id,
            'testable_type' => 'lesson',
            'duration'      => 0,
            'published_at'  => Carbon::parse($lesson->created_at)->format('Y-m-d'),
            'ended_at'      => Carbon::parse($lesson->created_at)->format('Y-m-d'),
            'level_id'      => null,
            'type'          => 'default',
        ]);

        // save quiz
        $examsController = resolve(ExamsController::class);
        $examsController->update($request, (int)$request->input('quiz.id'));

        return response([], 204);
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
            'course_id'                        => ['required', 'integer'],
            'label'                            => ['required', 'min:3', 'max:150'],
            'published_at'                     => ['required', 'date_format:Y-m-d H:i'],
            'youtube'                          => ['nullable', 'regex:/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/'],
            'soundcloud'                       => ['nullable', 'regex:/^https?:\/\/(soundcloud.com|snd.sc)\/(.*)$/'],
            'pdf'                              => ['nullable', 'string'],
            'questions'                        => ['required', 'array', 'min:1'],
            'questions.*.label'                => ['required', 'string', 'min:3', 'max:150'],
            'questions.*.score'                => ['required', 'integer', 'min:1'],
            'questions.*.order'                => ['required', 'integer'],
            'questions.*.answers'              => ['required', 'array', 'min:1'],
            'questions.*.answers.*.label'      => ['required', 'string', 'min:3', 'max:150'],
            'questions.*.answers.*.is_correct' => ['required', 'boolean']
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
            'course_id'    => $request['course_id'],
            'label'        => $request['label'],
            'youtube'      => $request['youtube'] ?? null,
            'soundcloud'   => $request['soundcloud'] ?? null,
            'pdf'          => $request['pdf'] ?? null,
            'published_at' => $request['published_at']
        ];
    }

}
