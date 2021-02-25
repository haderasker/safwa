<?php
namespace App\Listeners;

use App\Events\UserUpdatingEvent;
use App\Models\User;

class AssignCoursesToStudent
{
    /**
     * @param UserUpdatingEvent $event
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function handle(UserUpdatingEvent $event)
    {
        $newUser = $event->user;
        $oldUser = $event->user->getOriginal();

         if ($oldUser['doctrine_id']) {
             return;
         }

         // assign courses to the user
        User::assignCourses($newUser);
    }
}
