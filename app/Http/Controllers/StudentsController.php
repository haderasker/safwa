<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
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
        return User::role('student')->paginate($request->input('per_page', 10));
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
    public function store(Request $request)
    {
        $this->validateRequest($request);

        $teacher = new User($this->attributes($request->all()));

        $teacher->save();

        $teacher->assignRole('student');

        return $teacher;
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
            'name'  => ['required'],
            'email' => [
                'required',
                Rule::unique('users')->ignore($studentId),
            ],
            'password' => ['min:6', 'confirmed']
        ]);
    }

    private function attributes(array $fields): array
    {
        $attrs = [
            'name'     => $fields['name'],
            'email'    => $fields['email']
        ];

        if(isset($fields['password'])) {
            $attrs['password'] = bcrypt($fields['password']);
        }

        return $attrs;
    }
}
