<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/profile', function (Request $request) {
    $user = $request->user();
    $user = $user->load('roles');
    return $user;
});
