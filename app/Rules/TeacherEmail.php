<?php

namespace App\Rules;

use App\Models\User;
use Illuminate\Contracts\Validation\Rule;

class TeacherEmail implements Rule
{
    /**
     * @var string
     */
    private $type;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(string $type)
    {
        $this->type = $type;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        if($this->type !== 'teacher') {
            return true;
        }

        // check if email in the DB
        $isExists = User::where('email', $value)->count();

        if($isExists > 0) {
            return true;
        }

        return false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'make sure that admin added your email then register again.';
    }
}
