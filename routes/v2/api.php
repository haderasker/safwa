<?php

use App\Models\AcademicYear;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/profile', 'ProfileController@profile');
Route::post('/profile', 'ProfileController@updateProfile');

Route::group(['prefix' => 'media'], function () {
    Route::post('upload/{modelType}/{modelId}', 'ImageController@upload');
    Route::get('remove/{modelType}/{modelId}', 'ImageController@remove');
});

Route::group(['prefix' => 'comments'], function () {
    Route::post('/list', 'CommentsController@list');
    Route::get('/{parentId}', 'CommentsController@replies');
    Route::get('/{commentableType}/{commentableId}', 'CommentsController@index');
    Route::post('/{commentId}', 'CommentsController@store');
    Route::delete('/{commentId}', 'CommentsController@destroy');
    Route::put('/{commentId}', 'CommentsController@update');
    Route::patch('/{commentId}', 'CommentsController@toggleApprove');
    Route::delete('/{commentId}', 'CommentsController@delete');
});

Route::group(['prefix' => 'lessons'], function () {
    Route::post('/', 'LessonsController@store');
    Route::post('/list', 'LessonsController@index');
    Route::get('/{lessonId}', 'LessonsController@edit');
    Route::put('/{lessonId}', 'LessonsController@update');
    Route::delete('/{lessonId}', 'LessonsController@delete');
});

Route::group(['prefix' => 'courses'], function () {
    Route::post('/', 'CoursesController@store');                   // create new course
    Route::post('/list', 'CoursesController@index');               // list all courses
    Route::get('/{lessonId}', 'CoursesController@edit');           // get course by id
    Route::put('/{lessonId}', 'CoursesController@update');         // update course
    Route::delete('/{lessonId}', 'CoursesController@delete');      // delete course
});

Route::group(['prefix' => 'teachers'], function () {
    Route::post('/', 'TeachersController@store');
    Route::post('/list', 'TeachersController@index');
    Route::get('/block/{teacherId}', 'TeachersController@toggleBlock');
    Route::get('/{teacherId}', 'TeachersController@edit');
    Route::put('/{teacherId}', 'TeachersController@update');
    Route::delete('/{teacherId}', 'TeachersController@delete');
});

Route::group(['prefix' => 'students'], function () {
    Route::post('/', 'StudentsController@store');
    Route::post('/list', 'StudentsController@index');
    Route::post('/courses/list', 'StudentsController@courses');
    Route::post('/results/list', 'StudentsController@getResults');

    Route::group(['prefix' => 'exams'], function () {
        Route::post('/upcoming/list', 'StudentsController@upcomingExams');
        Route::post('/finished/list', 'StudentsController@finishedExams');
        Route::get('/{examId}', 'StudentsController@getExam');
        Route::post('/{examId}', 'StudentsController@submitExam');
        Route::get('/{examId}/start', 'StudentsController@startExam');
        Route::get('/{examId}/results', 'StudentsController@getFinishedExam');
    });

    Route::group(['prefix' => 'courses'], function () {
        Route::get('/{courseId}', 'StudentsController@getCourse');
    });

    Route::group(['prefix' => 'lessons'], function () {
        Route::get('/{lessonId}', 'StudentsController@getLesson');
    });

    Route::get('/{studentId}', 'StudentsController@edit');
    Route::put('/{studentId}', 'StudentsController@update');
    Route::delete('/{studentId}', 'StudentsController@delete');
});

Route::group(['prefix' => 'academic-years'], function () {
    Route::post('/', 'AcademicYearsController@store');
    Route::post('/list', 'AcademicYearsController@index');
    Route::get('/{yearId}', 'AcademicYearsController@edit');
    Route::put('/{yearId}', 'AcademicYearsController@update');
});

Route::group(['prefix' => 'levels'], function () {
    Route::post('/list', 'LevelsController@index');
});

Route::group(['prefix' => 'exams'], function () {
    Route::post('/', 'ExamsController@store');
    Route::post('/list', 'ExamsController@index');
    Route::get('/{examId}', 'ExamsController@edit');
    Route::put('/{examId}', 'ExamsController@update');
    Route::delete('/{examId}', 'ExamsController@delete');
});

Route::group(['prefix' => 'notifications'], function () {
    Route::get('/', 'NotificationsController@index');
    Route::post('/', 'NotificationsController@sendNotification');
    Route::post('/mark-read', 'NotificationsController@markAsRead');
});

Route::group(['prefix' => 'results'], function () {
    Route::post('/list', 'ResultsController@index');
    Route::post('/extra/{resultId}', 'ResultsController@extra');
});

Route::group(['prefix' => 'statistics'], function () {
    Route::get('admin', 'StatisticsController@admin');
    Route::get('teacher', 'StatisticsController@teacher');
    Route::get('student', 'StatisticsController@student');
});

Route::group(['prefix' => 'doctrines'], function () {
    Route::post('/list', 'DoctrinesController@index');
});

Route::group(['prefix' => 'semesters'], function() {
    Route::post('/list', 'SemestersController@index');
});

Route::post('/settings/set', 'SettingsController@set');
