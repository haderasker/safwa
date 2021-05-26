<?php

namespace App\Http\Controllers;

use App\Mail\UserNotification;
use App\Models\Notification;
use App\Models\User;
use Exception;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;

/**
 * Class NotificationsController
 * @package App\Http\Controllers
 * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
 */
class NotificationsController extends Controller
{

    public function index(Request $request): LengthAwarePaginator
    {
        return Notification::where('user_id', Auth::user()->id)
            ->whereNull('seen_at')
            ->paginate((int)$request->input('per_page', 10));
    }

    public function markAsRead(Request $request): array
    {
        Notification::whereIn('id', $request->input('notifications_ids'))->update([
            'seen_at' => now()
        ]);

        return [];
    }

    /**
     * @param Request $request
     * @return array|string
     * @throws ValidationException
     * @throws Exception
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function sendNotification(Request $request)
    {
        $type = $request->input('type');

        $this->validate($request, [
            'content' => [
                'required',
                'min:3',
                function ($attribute, $value, $fail) use ($type) {
                    if ($type !== 'notification') {
                        return;
                    }

                    // remove all html tage
                    // check length
                    // fail if more than 100
                    $length = strlen(strip_tags($value));

                    if ($length > 100) {
                        $fail('The ' . $attribute . ' should be max 100 chars.');
                    }
                },
            ],
            'group'   => ['required', 'string', 'in:teachers,levels,students'],
            'member'  => ['required', 'integer'],
            'type'    => ['required', 'in:notification,email'],
            'title'   => ['required', 'string']
        ]);

        $content = $request->input('content');
        $group = $request->input('group');
        $member = $request->input('member');
        $title = $request->input('title');

        switch ($group) {
            case 'teachers':
                $this->sendToTeachers($member, $content, $type, $title);
                break;
            case 'levels':
                $this->sendToLevels($member, $content, $type, $title);
                break;
            case 'students':
                $this->sendToStudents($member, $content, $type, $title);
                break;
            default:
                return 'no group selected';
        }

        return [];
    }

    /**
     * @param int $member
     * @param string $content
     * @param string $type
     * @throws Exception
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    private function sendToTeachers(int $member, string $content, string $type, string $title)
    {
        $teachersEmails = $member === -1 ? User::role('teacher')->pluck('id')->toArray() : [User::findOrFail($member)->id];

        $this->send($teachersEmails, $content, $type, $title);
    }

    /**
     * @param int $member
     * @param string $content
     * @param string $type
     * @throws Exception
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    private function sendToStudents(int $member, string $content, string $type, string $title)
    {
        $studentsEmails = $member === -1 ? User::role('student')->pluck('id')->toArray() : [User::findOrFail($member)->id];

        $this->send($studentsEmails, $content, $type, $title);
    }

    /**
     * @param int $member
     * @param string $content
     * @param string $type
     * @throws Exception
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    private function sendToLevels(int $member, string $content, string $type, string $title)
    {
        $studentsEmails = $member === -1 ? User::role('student')->pluck('id')->toArray() : User::where('level_id', $member)->pluck('id')->toArray();

        $this->send($studentsEmails, $content, $type, $title);
    }

    /**
     * @param array $ids
     * @param string $content
     * @param string $type
     * @param string $title
     * @throws Exception
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    private function send(array $ids, string $content, string $type, string $title)
    {
        // send the content to all $emails
        switch ($type) {
            case 'notification':
                $this->createNotifications($ids, $content, $title);
                break;
            case 'email':
                $this->sendEmails($ids, $content, $title);
                break;
            default:
                throw new Exception('no type provided');
        }
    }

    private function createNotifications(array $ids, string $content, string $title)
    {
        $notifications = [];
        $now = now();

        foreach ($ids as $id) {
            $notifications[] = [
                'user_id'    => $id,
                'title'      => $title,
                'body'       => strip_tags($content),
                'sent_at'    => $now,
                'seen_at'    => null,
                'created_at' => $now,
                'updated_at' => $now
            ];
        }

        Notification::insert($notifications);
    }

    private function sendEmails(array $ids, string $content, string $title)
    {
        $emails = User::whereIn('id', $ids);

        // send Emails
        foreach ($emails as $email) {
            Mail::to($email)->send(new UserNotification($title, $content));
        }
    }
}
