<?php

namespace App\Http\Controllers;

use App\Models\AcademicYear;
use App\Models\User;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class ProfileController extends Controller
{
    /**
     * @param Request $request
     * @return mixed
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function profile(Request $request)
    {
        $user = $request->user();
        $user = $user->load('roles', 'doctrine', 'media', 'level');
        $user->current_academic_year = AcademicYear::where('current', 1)->first()->label;

        return $user;
    }

    /**
     * @param Request $request
     * @return mixed
     * @throws ValidationException
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function updateProfile(Request $request)
    {
        $this->validateRequest($request);
        $user = User::findOrFail(Auth::user()->id);

        $user->fill($this->attributes($request->all()));

        $user->save();

        return $user;
    }

    /**
     * @param Request $request
     * @throws ValidationException
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    private function validateRequest(Request $request)
    {
        $this->validate($request, [
            'name'            => ['required'],
            'email'           => [
                'required',
                Rule::unique('users')->ignore(Auth::user()->id),
            ],
            'password'        => ['min:6', 'confirmed'],
            'about_me'        => [],
            'address'         => [],
            'ar_level'        => [],
            'birth_date'      => [],
            'country'         => [],
            'doctrine_id'     => [],
            'gender'          => [],
            'job'             => [],
            'language'        => [],
            'national_number' => [],
            'nationality'     => [],
            'phone'           => [],
            'qualification'   => [],
            'quran_level'     => [],
            'religion'        => []
        ]);
    }

    /**
     * @param array $fields
     * @return array
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    private function attributes(array $fields): array
    {
        $attrs = [
            'name'            => $fields['name'],
            'email'           => $fields['email'],
            'upload_lessons'  => $fields['upload_lessons'],
            'about_me'        => $fields['about_me'],
            'address'         => $fields['address'],
            'ar_level'        => $fields['ar_level'],
            'birth_date'      => $fields['birth_date'],
            'country'         => $fields['country'],
            'doctrine_id'     => $fields['doctrine_id'],
            'gender'          => $fields['gender'],
            'job'             => $fields['job'],
            'language'        => $fields['language'],
            'national_number' => $fields['national_number'],
            'nationality'     => $fields['nationality'],
            'phone'           => $fields['phone'],
            'qualification'   => $fields['qualification'],
            'quran_level'     => $fields['quran_level'],
            'religion'        => $fields['religion']
        ];

        if (isset($fields['password'])) {
            $attrs['password'] = bcrypt($fields['password']);
        }

        return $attrs;
    }

}
