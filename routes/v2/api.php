<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/profile', function (Request $request) {
    $user = $request->user();
    $user = $user->load('roles');
    return $user;
});

Route::group(['prefix' => 'comments'], function() {
    Route::get('/{parentId}', 'CommentsController@replies');
    Route::get('/{commentableType}/{commentableId}', 'CommentsController@index');
    Route::post('/{commentId}', 'CommentsController@store');
    Route::delete('/{commentId}', 'CommentsController@destroy');
    Route::put('/{commentId}', 'CommentsController@update');
});

Route::group(['prefix' => 'lessons'], function() {
    Route::get('/', 'LessonsController@index');
    Route::get('/{lessonId}', 'LessonsController@edit');
    Route::post('/', 'LessonsController@store');
    Route::put('/{lessonId}', 'LessonsController@update');
    Route::delete('/{lessonId}', 'LessonsController@delete');
});

Route::group(['prefix' => 'courses'], function() {
    Route::get('/', 'CoursesController@index'); // list all courses
    Route::get('/{lessonId}', 'CoursesController@edit'); // get course by id
    Route::post('/', 'CoursesController@store'); // create new course
    Route::put('/{lessonId}', 'CoursesController@update'); // update course
    Route::delete('/{lessonId}', 'CoursesController@delete'); // delete course
});

Route::group(['prefix' => 'teachers'], function() {
    Route::get('/', 'TeachersController@index');
    Route::post('/', 'TeachersController@store');
    Route::get('/{teacherId}', 'TeachersController@edit');
    Route::put('/{teacherId}', 'TeachersController@update');
});

Route::group(['prefix' => 'students'], function() {
    Route::get('/', 'StudentsController@index');
    Route::post('/', 'StudentsController@store');
    Route::get('/{studentId}', 'StudentsController@edit');
    Route::put('/{studentId}', 'StudentsController@update');
});

Route::group(['prefix' => 'academic-years'], function() {
    Route::get('/', 'AcademicYearsController@index');
    Route::post('/', 'AcademicYearsController@store');
    Route::get('/{yearId}', 'AcademicYearsController@edit');
    Route::put('/{yearId}', 'AcademicYearsController@update');
});

Route::group(['prefix' => 'levels'], function() {
    Route::get('/', 'LevelsController@index');
});

Route::group(['prefix' => 'exams'], function() {
    Route::get('/', 'ExamsController@index');
    Route::get('/{examId}', 'ExamsController@edit');
    Route::post('/', 'ExamsController@store');
    Route::put('/{examId}', 'ExamsController@update');
});

Route::group(['prefix' => 'notifications'], function() {
    Route::post('/email', 'NotificationsController@sendEmail');
});
