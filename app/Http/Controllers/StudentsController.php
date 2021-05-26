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
use App\Models\UserLesson;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
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
        $filters = $request->input('filters', []);
        $sort = $request->input('sort', []);

        return User::role('student')
            ->when(isset($filters['level']), function ($query) use ($filters) {
                $query->where('level_id', $filters['level']);
            })
            ->when(isset($filters['search']), function ($query) use ($filters) {
                $query->where(function ($query) use ($filters) {
                    $query->where('name', 'like', '%' . $filters['search'] . '%')
                        ->orWhere('email', 'like', '%' . $filters['search'] . '%');
                });
            })
            ->when(isset($filters['status']), function ($query) use ($filters) {
                $query->where('status', $filters['status']);
            })
            ->when(count($sort), function ($query) use ($sort) {
                foreach ($sort as $item) {
                    $query->orderBy($item['colId'], $item['sort']);
                }
            })
            ->paginate((int)$request->input('per_page', 10));
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
            'status'   => ['integer', 'in:1,2,3'],
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
                'name'   => $fields['name'],
                'email'  => $fields['email'],
                'status' => $fields['status']
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
            ->with('teacher', 'media')
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
            ['testable_type', Course::class]
        ])
            ->whereDate('published_at', '<=', now())
            ->whereDate('ended_at', '>=', now())
            ->whereIn('testable_id', Auth::user()->courses()->pluck('courses.id')->toArray())
            ->whereDoesntHave('studentExam', function ($query) {
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
            ->whereDate('ended_at', '<', Carbon::now())
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
                if ($answer === -1) {
                    continue;
                }

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
        $exam = Exam::with([
            'level',
            'studentExam' => function ($query) {
                $query->first();
            },
            'questions'   => function ($query) {
                $query->with('answers');
            },
            'responses'   => function ($query) {
                $query->where('student_id', Auth::user()->id);
            }
        ])
            ->findOrFail($examId);

        foreach ($exam->questions as $question) {
            foreach ($question->answers as $answer) {
                $isInUserAnswers = $exam->responses
                    ->where('question_id', $question->id)
                    ->where('answer_id', $answer->id)
                    ->first();

                if ($answer->is_correct) {
                    $question->correctAnswer = $answer;
                }

                if ($answer->is_correct && $isInUserAnswers) {
                    $answer->student_correct_answer = true;
                    $question->correct = true;
                }

                if (!$answer->is_correct && $isInUserAnswers) {
                    $question->correct = false;
                    $answer->student_wrong_answer = true;
                }

                if ($isInUserAnswers) {
                    $answer->selected = true;
                }
            }
        }

        $exam = $exam->toArray();
        unset($exam['responses']);

        return $exam;
    }

    public function isTaken(int $examId)
    {
        $exam = Exam::withCount([
            'studentExam' => function (Builder $query) {
                $query->where('student_id', Auth::user()->id);
            }
        ])
            ->find($examId);

        if (
            $exam->student_exam_count > 0
            || Carbon::parse($exam->published_at)->toDateString() >= now()->toDateString()
            || Carbon::parse($exam->ended_at)->toDateString() <= now()->toDateString()
        ) {
            return [
                'is_taken' => true
            ];
        }

        return [
            'is_taken' => false
        ];
    }

    public function getCourse(int $courseId)
    {
        $course = Course::with([
            'teacher:id,name,about_me',
            'students' => function($query) {
                $query->select('users.id');
                $query->withPivot('type')->find(Auth::user()->id);
            }
        ])->withCount('lessons')->findOrFail($courseId);

        $finishedLessons = Lesson::select('id', 'label', 'course_id', 'published_at')
            ->where('course_id', $courseId)
            ->whereHas('studentQuiz', function ($query) {
                $query->where('students_exams.student_id', Auth::user()->id);
                $query->where('students_exams.passed', 1);
            });

        $firstLessonUnfinished = Lesson::select('id', 'label', 'course_id', 'published_at')
            ->where('course_id', $courseId)
            ->whereDoesntHave('studentQuiz', function($query) {
                $query->where('students_exams.student_id', Auth::user()->id);
                $query->where('students_exams.passed', 1);
            })
            ->get();

        $course->lessons = array_merge($finishedLessons->get()->toArray(), $firstLessonUnfinished->map(function($lesson, $key) {
            if($key === 0) {
                return $lesson;
            }

            $lesson->disabled = true;
            return $lesson;
        })->toArray());

        $course->progress = round($finishedLessons->count() / $course->lessons_count * 100);

        return $course;
    }

    public function getLesson(int $lessonId)
    {
        return Lesson::with([
            'course',
            'quiz' => function ($query) use ($lessonId) {
                $query->with('studentExam');
//                $query->whereHas('studentExam', function($query) use ($lessonId) {
//                    $query->where('exam_id', $lessonId);
//                });
            },
            'quiz.questions.answers'
        ])
            ->select('lessons.*')
            ->selectRaw("IF(COUNT(users_lessons.id) > 0, 'true', 'false') as viewed")
            ->leftJoin('users_lessons', 'users_lessons.lesson_id', 'lessons.id')
            ->groupBy('lessons.id')
            ->findOrFail($lessonId);
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

    public function delete(int $id)
    {
        User::findOrFail($id)->delete();

        return response(null, 204);
    }

    public function show(int $id): User
    {
        return User::with('roles', 'doctrine', 'media')->findOrFail($id);
    }

    public function finishLesson(int $id)
    {
        UserLesson::where([
            ['user_id', '=', Auth::user()->id],
            ['lesson_id', '=', $id]
        ])->delete();

        UserLesson::insert([
            'user_id'    => Auth::user()->id,
            'lesson_id'  => $id,
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
