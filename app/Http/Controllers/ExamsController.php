<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Exam;
use App\Models\Question;
use App\Utils\Convert;
use Exception;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

/**
 * Class ExamsController
 * @package App\Http\Controllers
 * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
 */
class ExamsController extends Controller
{
    public function index(Request $request): LengthAwarePaginator
    {
        return Exam::withCount('questions')->paginate($request->input('per_page', 10));
    }

    /**
     * @param int $examId
     * @return Exam
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function edit(int $examId): Exam
    {
        return Exam::with('questions.answers', 'level', 'testable')->findOrFail($examId);
    }

    /**
     * @param Request $request
     * @param int $examId
     * @return Application|ResponseFactory|Response
     * @throws ValidationException
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function update(Request $request, int $examId)
    {
        $this->validateRequest($request);

        $inputs = $request->all();

        try {
            DB::transaction(function () use ($inputs, $examId) {
                $exam = Exam::findOrFail($examId);
                $exam->fill($this->examAttributes($inputs));
                $exam->save();

                foreach ($inputs['questions'] as $questionData) {
                    $question = Question::findOrFail($questionData['id']);
                    $question->fill($questionData);
                    $question->save();

                    foreach ($questionData['answers'] as $answerData) {
                        $answer = Answer::findOrFail($answerData['id']);
                        $answer->fill($answerData);
                        $answer->save();
                    }
                }
            });
        } catch (Exception $e) {
            throw new Exception('exam update failed, please try again');
        }

        return response([], 204);
    }

    /**
     * @param Request $request
     * @return Application|ResponseFactory|Response
     * @throws ValidationException
     * @throws Exception
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function store(Request $request)
    {
        $this->validateRequest($request);

        $inputs = $request->all();

        try {
            DB::transaction(function () use ($inputs) {
                $exam = new Exam($this->examAttributes($inputs));
                $exam->save();

                foreach ($inputs['questions'] as $questionData) {

                    $question = new Question(array_merge($questionData, ['exam_id' => $exam->id]));
                    $question->save();

                    foreach ($questionData['answers'] as $answerData) {
                        $answer = new Answer(array_merge($answerData, ['question_id' => $question->id]));
                        $answer->save();
                    }
                }
            });
        } catch (Exception $e) {
            throw new Exception('exam creation failed, please try again');
        }

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
            'label'                            => ['required', 'string', 'min:3', 'max:150'],
            'testable_id'                      => ['required', 'integer'],
            'testable_type'                    => ['required', 'string', 'in:lesson,course'],
            'duration'                         => ['required', 'integer'],
            'published_at'                     => ['required', 'date_format:Y-m-d'],
            'ended_at'                         => ['required', 'date_format:Y-m-d'],
            'level_id'                         => ['nullable', 'integer'],
            'type'                             => ['required', 'string', 'in:default,fail'],
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
     * @param array $inputs
     * @return array
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    private function examAttributes(array $inputs): array
    {
        return [
            'testable_id'   => $inputs['testable_id'],
            'testable_type' => Convert::toModelName($inputs['testable_type']),
            'label'         => $inputs['label'],
            'duration'      => $inputs['duration'],
            'published_at'  => $inputs['published_at'],
            'ended_at'      => $inputs['ended_at'],
            'level_id'      => $inputs['level_id'],
            'type'          => $inputs['type']
        ];
    }
}
