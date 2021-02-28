<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Exam;
use App\Models\Lesson;
use App\Models\Question;
use App\Models\Semester;
use App\Models\StudentExam;
use App\Models\StudentResponse;
use App\Models\StudentResult;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Rule;

/**
 * Class StudentsController
 * @package App\Http\Controllers
 * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
 */
class StudentsController extends Controller
{
    /**
     * @param Request $request
     * @return LengthAwarePaginator
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function index(Request $request): LengthAwarePaginator
    {
        return User::role('student')->paginate((int)$request->input('per_page', 10));
    }

    /**
     * @param int $studentId
     * @return mixed
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function edit(int $studentId)
    {
        return User::findOrFail($studentId);
    }

    /**
     * @param Request $request
     * @return User
     * @throws ValidationException
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function store(Request $request): User
    {
        $this->validateRequest($request);

        return DB::transaction(function () use ($request) {
            $student = new User($this->attributes($request->all(), [
                'level_id' => 1
            ]));

            $student->save();

            $student->assignRole('student');

            return $student;
        });
    }

    /**
     * @param Request $request
     * @param int $studentId
     * @return mixed
     * @throws ValidationException
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function update(Request $request, int $studentId)
    {
        $this->validateRequest($request, $studentId);

        $student = User::findOrFail($studentId);
        $student->fill($this->attributes($request->all()));

        $student->save();

        return $student;
    }

    /**
     * @param Request $request
     * @param null $studentId
     * @throws ValidationException
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    private function validateRequest(Request $request, $studentId = null)
    {
        $this->validate($request, [
            'name'     => ['required'],
            'email'    => [
                'required',
                Rule::unique('users')->ignore($studentId),
            ],
            'password' => ['min:6', 'confirmed']
        ]);
    }

    /**
     * @param array $fields
     * @param array $extra
     * @return array
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    private function attributes(array $fields, array $extra = []): array
    {
        $attrs = array_merge(
            [
                'name'  => $fields['name'],
                'email' => $fields['email'],
            ],
            $extra
        );

        if (isset($fields['password'])) {
            $attrs['password'] = bcrypt($fields['password']);
        }

        return $attrs;
    }

    /**
     * @param Request $request
     * @return LengthAwarePaginator
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function courses(Request $request): LengthAwarePaginator
    {
        $userId = Auth::user()->id;

        return User::find($userId)
            ->courses()
            ->with('teacher')
            ->withCount('lessons')
            ->paginate((int)$request->input('per_page', 10));
    }

    /**
     * @param Request $request
     * @return LengthAwarePaginator
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function upcomingExams(Request $request): LengthAwarePaginator
    {
        return Exam::where([
            ['level_id', '=', Auth::user()->level_id],
            ['published_at', '<=', now()],
            ['ended_at', '>=', now()],
            ['testable_type', Course::class]
        ])
            ->whereIn('testable_id', Auth::user()->courses()->pluck('courses.id')->toArray())
            ->whereDoesntHave('studentExam', function($query) {
                $query->where('student_id', Auth::user()->id);
            })
            ->paginate((int)$request->input('per_page', 10));
    }

    /**
     * @param Request $request
     * @return LengthAwarePaginator
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function finishedExams(Request $request): LengthAwarePaginator
    {
        return Exam::where('level_id', Auth::user()->level_id)
            ->where('ended_at', '<=', Carbon::now()->addDay())
            ->whereHas('studentExam', function ($query) {
                $query->where('student_id', Auth::user()->id);
            })
            ->paginate((int)$request->input('per_page', 10));
    }

    /**
     * @param int $examId
     * @return StudentExam
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function startExam(int $examId): StudentExam
    {
        $exam = StudentExam::firstOrNew([
            'student_id' => Auth::user()->id,
            'exam_id'    => $examId,
        ]);

        $exam->retries = $exam->retries + 1;

        $exam->save();

        return $exam;
    }

    public function submitExam(Request $request, int $examId): array
    {
        $studentId = Auth::user()->id;
        $studentAnswers = $request->input('answers');
        $studentAnswersRows = [];
        $questionObjects = Question::with('answers')->whereIn('id', array_keys($studentAnswers))->get();
        $totalScore = $questionObjects->reduce(function ($total, $question) {
            return $total + $question->score;
        }, 0);
        $studentScore = $questionObjects->reduce(function ($total, $question) use ($studentAnswers) {
            $correctAnswer = $question->answers->first(function ($value) {
                return !!$value->is_correct;
            });

            if ($correctAnswer->id === $studentAnswers[$question->id]) {
                return $total + $question->score;
            }

            return $total;
        }, 0);

        $passed = $studentScore >= ($totalScore / 2);

        DB::transaction(function () use ($studentId, $examId, $studentScore, $passed, $studentAnswers, $studentAnswersRows) {
            $studentExams = StudentExam::where([
                ['student_id', '=', $studentId],
                ['exam_id', '=', $examId],
            ])->first();

            $studentExams->score = $studentScore;
            $studentExams->passed = $passed;
            $studentExams->is_submitted = 1;

            $studentExams->save();

            foreach ($studentAnswers as $question => $answer) {
                $studentAnswersRows[] = [
                    'student_id'  => $studentId,
                    'exam_id'     => $examId,
                    'question_id' => $question,
                    'answer_id'   => $answer
                ];
            }

            // delete old answers
            StudentResponse::where([
                ['student_id', '=', $studentId],
                ['exam_id', '=', $examId],
            ])->delete();

            // create new ones
            StudentResponse::insert($studentAnswersRows);
        });

        return [];
    }

    public function getExam(int $examId): Exam
    {
        return Exam::with([
            'level',
            'questions' => function ($query) {
                $query->with('answers');
            }
        ])->findOrFail($examId);
    }

    public function getFinishedExam(int $examId)
    {
        return Exam::with([
            'level',
            'questions' => function ($query) {
                $query->with('answers');
            },
            'responses' => function($query) {
                $query->where('student_id', Auth::user()->id);
            }
        ])->findOrFail($examId);
    }

    public function getCourse(int $courseId)
    {
        return Course::with('lessons:id,label,course_id')->findOrFail($courseId);
    }

    public function getLesson(int $lessonId)
    {
        return Lesson::with([
            'course',
            'quiz' => function($query) use ($lessonId) {
            $query->with('studentExam');
//                $query->whereHas('studentExam', function($query) use ($lessonId) {
//                    $query->where('exam_id', $lessonId);
//                });
            },
            'quiz.questions.answers'
        ])->findOrFail($lessonId);
    }

    /**
     * @param Request $request
     * @return LengthAwarePaginator
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function getResults(Request $request): LengthAwarePaginator
    {
        return StudentResult::where('student_id', Auth::user()->id)
            ->with([
                'level:id,name',
                'academicYear:id,label'
            ])
            ->paginate((int)$request->input('per_page', 10));
    }
}
