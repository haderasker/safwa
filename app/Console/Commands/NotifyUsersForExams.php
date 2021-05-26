<?php

namespace App\Console\Commands;

use App\Mail\UserNotification;
use App\Models\Course;
use App\Models\Exam;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class NotifyUsersForExams extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notify:new-exams';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'check every hour if there is any new exam became available then notify the users';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // get all available exams where notified is null
        // foreach
        //      get all students that should take this exam
        //      send email to them

        $availableExams = Exam::with('testable.students')
            ->whereNull('notified_at')
            ->where('testable_type', Course::class)
            ->whereDate('published_at', '<=', now())
            ->whereDate('ended_at', '>=', now())
            ->get();

        foreach ($availableExams as $exam) {
            $students = $exam->testable->students ?? [];

            foreach ($students as $student) {
                Mail::to($student->email)->send(new UserNotification('New Exam Available', 'there is a new exam available now, please check in your exams page in the dashboard.'));
            }

            $exam->notified_at = now();
            $exam->save();
        }





        return 0;
    }
}
