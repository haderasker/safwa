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
use Illuminate\Database\Eloquent\Builder;
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
        $filters = $request->input('filters', []);
        $sort = $request->input('sort', []);

        return Exam::withCount([
            'questions',
            'studentExam',
            'studentExam as graduation_students' => function (Builder $query) {
                $query->where('passed', 1);
            },
        ])
            ->when(isset($filters['level']), function ($query) use ($filters) {
                $query->where('level_id', $filters['level']);
            })
            ->when(isset($filters['name']), function ($query) use ($filters) {
                $query->where('label', 'like', '%' . $filters['name'] . '%');
            })
            ->when(count($sort), function ($query) use ($sort) {
                foreach ($sort as $item) {
                    $query->orderBy($item['colId'], $item['sort']);
                }
            })
            ->paginate((int)$request->input('per_page', 10));
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
     * @throws Exception
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function update(Request $request, int $examId)
    {
        $this->validateRequest($request);

        $inputs = $request->all();

        try {
            DB::transaction(function () use ($inputs, $examId) {
                $exam = $examId === 0 ? new Exam() : Exam::findOrFail($examId);
                $exam->fill($this->examAttributes($inputs));
                $exam->save();

                // delete old questions
                Question::whereIn('id', $inputs['deletedQuestions'])->delete();
                Answer::whereIn('question_id', $inputs['deletedQuestions'])->delete();

                foreach ($inputs['exam']['questions'] as $questionData) {
                    $question = Question::firstOrNew([
                        'id' => $questionData['id']
                    ]);
                    $question->fill(array_merge($questionData, [
                        'exam_id' => $exam->id
                    ]));
                    $question->save();

                    foreach ($questionData['answers'] as $answerData) {
                        $answer = Answer::firstOrNew([
                            'id' => $answerData['id'] ?? ''
                        ]);
                        $answer->fill(array_merge($answerData, [
                            'question_id' => $question->id
                        ]));
                        $answer->save();
                    }
                }
            });
        } catch (Exception $e) {
            throw new Exception('exam update failed, please try again: ' . $e->getMessage());
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

                foreach ($inputs['exam']['questions'] as $questionData) {

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
            'exam.label'                            => ['required', 'string', 'max:150'],
            'exam.testable_id'                      => ['required', 'integer'],
            'exam.testable_type'                    => ['required', 'string', 'in:lesson,course'],
            'exam.duration'                         => ['required', 'integer'],
            'exam.published_at'                     => ['required', 'date_format:Y-m-d'],
            'exam.ended_at'                         => ['required', 'date_format:Y-m-d'],
            'exam.level_id'                         => ['nullable', 'integer'],
            'exam.type'                             => ['required', 'string', 'in:default,fail'],
            'exam.questions'                        => ['required', 'array', 'min:1'],
            'exam.questions.*.label'                => ['required', 'string', 'max:150'],
            'exam.questions.*.score'                => ['required', 'integer', 'min:1'],
            'exam.questions.*.order'                => ['required', 'integer'],
            'exam.questions.*.answers'              => ['required', 'array', 'min:1'],
            'exam.questions.*.answers.*.label'      => ['required', 'string', 'max:150'],
            'exam.questions.*.answers.*.is_correct' => ['required', 'boolean']
        ]);
    }

    /**
     * @param array $inputs
     * @return array
     * @throws Exception
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    private function examAttributes(array $inputs): array
    {
        return [
            'testable_id'   => $inputs['exam']['testable_id'],
            'testable_type' => Convert::toModelName($inputs['exam']['testable_type']),
            'label'         => $inputs['exam']['label'],
            'duration'      => $inputs['exam']['duration'],
            'published_at'  => $inputs['exam']['published_at'],
            'ended_at'      => $inputs['exam']['ended_at'],
            'level_id'      => $inputs['exam']['level_id'],
            'type'          => $inputs['exam']['type'],
            'score'         => array_reduce($inputs['exam']['questions'], function ($total, $current) {
                return $total + $current['score'];
            }, 0)
        ];
    }

    public function delete(int $id)
    {
        Exam::findOrFail($id)->delete();

        return response(null, 204);
    }
}
