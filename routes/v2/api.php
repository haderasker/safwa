<?php

use App\Models\AcademicYear;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/profile', 'ProfileController@profile');
Route::post('/profile', 'ProfileController@updateProfile');

Route::group(['prefix' => 'media'], function() {
    Route::post('upload/{modelType}/{modelId}', 'ImageController@upload');
    Route::get('remove/{modelType}/{modelId}', 'ImageController@remove');
});

Route::group(['prefix' => 'comments'], function () {
    Route::get('/{parentId}', 'CommentsController@replies');
    Route::get('/{commentableType}/{commentableId}', 'CommentsController@index');
    Route::post('/{commentId}', 'CommentsController@store');
    Route::delete('/{commentId}', 'CommentsController@destroy');
    Route::put('/{commentId}', 'CommentsController@update');
});

Route::group(['prefix' => 'lessons'], function () {
    Route::get('/', 'LessonsController@index');
    Route::get('/{lessonId}', 'LessonsController@edit');
    Route::post('/', 'LessonsController@store');
    Route::put('/{lessonId}', 'LessonsController@update');
    Route::delete('/{lessonId}', 'LessonsController@delete');
});

Route::group(['prefix' => 'courses'], function () {
    Route::get('/', 'CoursesController@index');               // list all courses
    Route::get('/{lessonId}', 'CoursesController@edit');      // get course by id
    Route::post('/', 'CoursesController@store');              // create new course
    Route::put('/{lessonId}', 'CoursesController@update');    // update course
    Route::delete('/{lessonId}', 'CoursesController@delete'); // delete course
});

Route::group(['prefix' => 'teachers'], function () {
    Route::get('/', 'TeachersController@index');
    Route::post('/', 'TeachersController@store');
    Route::get('/{teacherId}', 'TeachersController@edit');
    Route::put('/{teacherId}', 'TeachersController@update');
});

Route::group(['prefix' => 'students'], function () {
    Route::get('/', 'StudentsController@index');
    Route::post('/', 'StudentsController@store');
    Route::get('/courses', 'StudentsController@courses');
    Route::get('/results', 'StudentsController@getResults');

    Route::group(['prefix' => 'exams'], function () {
        Route::get('/upcoming', 'StudentsController@upcomingExams');
        Route::get('/finished', 'StudentsController@finishedExams');
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
});

Route::group(['prefix' => 'academic-years'], function () {
    Route::get('/', 'AcademicYearsController@index');
    Route::post('/', 'AcademicYearsController@store');
    Route::get('/{yearId}', 'AcademicYearsController@edit');
    Route::put('/{yearId}', 'AcademicYearsController@update');
});

Route::group(['prefix' => 'levels'], function () {
    Route::get('/', 'LevelsController@index');
});

Route::group(['prefix' => 'exams'], function () {
    Route::get('/', 'ExamsController@index');
    Route::get('/{examId}', 'ExamsController@edit');
    Route::post('/', 'ExamsController@store');
    Route::put('/{examId}', 'ExamsController@update');
});

Route::group(['prefix' => 'notifications'], function () {
    Route::post('/email', 'NotificationsController@sendEmail');
});

Route::group(['prefix' => 'results'], function () {
    Route::get('/', 'ResultsController@index');
});

Route::group(['prefix' => 'statistics'], function () {
    Route::get('admin', 'StatisticsController@admin');
    Route::get('teacher', 'StatisticsController@teacher');
    Route::get('student', 'StatisticsController@student');
});

Route::group(['prefix' => 'doctrines'], function () {
    Route::get('/', 'DoctrinesController@index');
});
