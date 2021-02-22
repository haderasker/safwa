<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Rule;

/**
 * Class TeachersController
 * @package App\Http\Controllers
 * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
 */
class TeachersController extends Controller
{
    /**
     * @param Request $request
     * @return LengthAwarePaginator
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function index(Request $request): LengthAwarePaginator
    {
        return User::withCount('teacherLessons')->role('teacher')->paginate((int)$request->input('per_page', 10));
    }

    /**
     * @param int $teacherId
     * @return mixed
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function edit(int $teacherId)
    {
        return User::with('courses.lessons')->findOrFail($teacherId);
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

        $teacher = new User($this->attributes($request->all()));

        $teacher->save();

        $teacher->assignRole('teacher');

        return $teacher;
    }

    /**
     * @param Request $request
     * @param int $teacherId
     * @return User
     * @throws ValidationException
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function update(Request $request, int $teacherId): User
    {
        $this->validateRequest($request, $teacherId);

        $teacher = User::findOrFail($teacherId);
        $teacher->fill($this->attributes($request->all()));

        $teacher->save();

        return $teacher;
    }

    /**
     * @param Request $request
     * @param null $teacherId
     * @throws ValidationException
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    private function validateRequest(Request $request, $teacherId = null)
    {
        $this->validate($request, [
            'name'     => ['required'],
            'email'    => [
                'required',
                Rule::unique('users')->ignore($teacherId),
            ],
            'password' => ['min:6', 'confirmed']
        ]);
    }

    private function attributes(array $fields): array
    {
        $attrs = [
            'name'           => $fields['name'],
            'email'          => $fields['email'],
            'upload_lessons' => $fields['upload_lessons'],
            'about_me'       => $fields['about_me']
        ];

        if (isset($fields['password'])) {
            $attrs['password'] = bcrypt($fields['password']);
        }

        return $attrs;
    }
}
