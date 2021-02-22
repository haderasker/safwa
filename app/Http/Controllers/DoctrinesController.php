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
        return Doctrine::paginate((int)request()->input('par_page', 10));
    }
}
