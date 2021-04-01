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
        $filters = $request->input('filters', []);
        $sort = $request->input('sort', []);

        $lessons = Lesson::with('course')
            ->withCount([
                'studentQuiz as total_students'  => function ($query) {
                    $query->where('exams.testable_type', Lesson::class);
                },
                'studentQuiz as passed_students' => function ($query) {
                    $query->where('exams.testable_type', Lesson::class)
                        ->where('students_exams.passed', 1);
                }
            ]);

        if (Auth::user()->hasRole('teacher')) {
            $lessons->whereHas('course', function ($query) {
                $query->where('teacher_id', Auth::user()->id);
            });
        }

        return $lessons
            ->when(isset($filters['name']), function ($query) use ($filters) {
                $query->where('label', $filters['name']);
            })
            ->when(isset($filters['course']), function ($query) use ($filters) {
                $query->where('course_id', $filters['course']);
            })
            ->when(count($sort), function ($query) use ($sort) {
                foreach ($sort as $item) {
                    $query->orderBy($item['colId'], $item['sort']);
                }
            })
            ->paginate((int)$request->input('per_page', 10));
    }

    public function edit(int $lessonId)
    {
        return Lesson::with('course', 'quiz.questions.answers', 'media')->findOrFail($lessonId);
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
            'exam' => [
                'label'         => $request->input('label'),
                'testable_id'   => $lesson->id,
                'testable_type' => 'lesson',
                'duration'      => 0,
                'published_at'  => Carbon::parse($lesson->created_at)->format('Y-m-d'),
                'ended_at'      => Carbon::parse($lesson->created_at)->format('Y-m-d'),
                'level_id'      => null,
                'type'          => 'default',
                'questions'     => $request->input('questions')
            ]
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
        error_log(print_r($request->all(), true));

        $this->validateRequest($request);

        $lesson = Lesson::findOrFail($lessonId);
        $lesson->fill($this->attributes($request->all()));
        $lesson->save();

        // update request to support exam inputs
        $request->request->add([
            'exam' => [
                'label'            => $request->input('lesson')['label'] ?? null,
                'testable_id'      => $lesson->id,
                'testable_type'    => 'lesson',
                'duration'         => 0,
                'published_at'     => Carbon::parse($lesson->created_at)->format('Y-m-d'),
                'ended_at'         => Carbon::parse($lesson->created_at)->format('Y-m-d'),
                'level_id'         => null,
                'type'             => 'default',
                'questions'        => $request->input('lesson')['questions'] ?? null,
                'deletedQuestions' => $request->input('deletedQuestions')
            ]
        ]);

        // save quiz
        $examsController = resolve(ExamsController::class);
        $examsController->update($request, (int)$request->input('quiz.id'));

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
            'lesson.course_id'                        => ['required', 'integer'],
            'lesson.label'                            => ['required', 'max:150'],
            'lesson.published_at'                     => ['required', 'date_format:Y-m-d H:i'],
            'lesson.youtube'                          => ['nullable', 'regex:/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/'],
            'lesson.soundcloud'                       => ['nullable', 'string'],
            'lesson.pdf'                              => ['nullable', 'string'],
            'lesson.questions'                        => ['required', 'array', 'min:1'],
            'lesson.questions.*.label'                => ['required', 'string', 'max:150'],
            'lesson.questions.*.score'                => ['required', 'integer', 'min:1'],
            'lesson.questions.*.order'                => ['required', 'integer'],
            'lesson.questions.*.answers'              => ['required', 'array', 'min:1'],
            'lesson.questions.*.answers.*.label'      => ['required', 'string', 'max:150'],
            'lesson.questions.*.answers.*.is_correct' => ['required', 'boolean']
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
            'course_id'    => $request['lesson']['course_id'],
            'label'        => $request['lesson']['label'],
            'youtube'      => $request['lesson']['youtube'] ?? null,
            'soundcloud'   => $request['lesson']['soundcloud'] ?? null,
            'pdf'          => $request['lesson']['pdf'] ?? null,
            'published_at' => $request['lesson']['published_at']
        ];
    }

    public function delete(int $id)
    {
        Lesson::findOrFail($id)->delete();

        return response(null, 204);
    }
}
