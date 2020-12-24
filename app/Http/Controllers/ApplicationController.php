<?php

namespace App\Http\Controllers;

class ApplicationController extends Controller
{
    public function index($any = '')
    {
        return view('application');
    }
}
