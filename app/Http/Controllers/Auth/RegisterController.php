<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Rules\StudentEmail;
use App\Rules\TeacherEmail;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'type'     => ['required', 'in:student,teacher'],
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'string', 'email', 'max:255', new StudentEmail($data['type']), new TeacherEmail($data['type'])],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param array $data
     * @return User
     */
    protected function create(array $data)
    {
        $user = User::updateOrCreate([
            'email' => $data['email']
        ], [
            'name'     => $data['name'],
            'password' => Hash::make($data['password']),
        ]);

        // assign role to the user
        $user->assignRole($data['type']);

        $levelOneCoursesForCurrentYear = DB::select("
            select semester_level_course.course_ids
            from semester_level_course
            left join semesters on semester_level_course.semester_id = semesters.id
            left join levels on semester_level_course.level_id = levels.id
            left join academic_years on semesters.academic_year_id = academic_years.id
            where academic_years.current = 1
                and levels.id = 1;
        ");

        $levelOneCoursesForCurrentYear = array_reduce($levelOneCoursesForCurrentYear, function ($total, $item) {
            return array_merge($total, json_decode($item->course_ids));
        }, []);

        $levelOneCoursesForCurrentYear = array_values(array_unique($levelOneCoursesForCurrentYear));

        $user->courses()->attach($levelOneCoursesForCurrentYear);

        return $user;
    }
}
