<?php

namespace App\Http\Controllers;

use App\Models\Doctrine;

class DoctrinesController extends Controller
{
    /**
     * @return mixed
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function index()
    {
        return Doctrine::paginate(request()->input('par_page'));
    }
}
