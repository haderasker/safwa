<?php

namespace App\Http\Controllers;

use App\Models\Level;
use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

/**
 * Class NotificationsController
 * @package App\Http\Controllers
 * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
 */
class NotificationsController extends Controller
{

    /**
     * @param Request $request
     * @return array|string
     * @throws ValidationException
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function sendEmail(Request $request)
    {
        $this->validate($request, [
            'content' => ['required', 'min:3'],
            'group' => ['required', 'string', 'in:teachers,levels,students'],
            'member' => ['required', 'integer']
        ]);

        $content = $request->input('content');
        $group = $request->input('group');
        $member = $request->input('member');

        switch ($group) {
            case 'teachers': $this->sendToTeachers($member, $content); break;
            case 'levels': $this->sendToLevels($member, $content); break;
            case 'students': $this->sendToStudents($member, $content); break;
            default: return 'no group selected';
        }

        return [];
    }

    private function sendToTeachers(int $member, string $content)
    {
        $teachersEmails = $member === -1 ? User::role('teacher')->pluck('email')->toArray() : [User::findOrFail($member)->email];

        $this->send($teachersEmails, $content);
    }

    private function sendToStudents(int $member, string $content)
    {
        $studentsEmails = $member === -1 ? User::role('student')->pluck('email')->toArray() : [User::findOrFail($member)->email];

        $this->send($studentsEmails, $content);
    }

    private function sendToLevels(int $member, string $content)
    {
        $studentsEmails = $member === -1 ? User::role('student')->pluck('email')->toArray() : User::where('level_id', $member)->pluck('email')->toArray();

        $this->send($studentsEmails, $content);
    }

    private function send(array $emails, string $content)
    {
        // send the content to all $emails
    }
}
