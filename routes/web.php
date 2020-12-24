<?php

use Illuminate\Support\Facades\Route;

// Auth Routes
//Route::post('email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
//Route::get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');
Route::post('login', 'Auth\LoginController@login')->name('login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');
Route::post('register', 'Auth\RegisterController@register')->name('register');

// Vue Route
Route::get('/{any}', 'ApplicationController@index')->where('any', '.*');
