<?php

namespace App\Http\Controllers;

use App\Models\StudentExam;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;

/**
 * Class LevelsController
 * @package App\Http\Controllers
 * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
 */
class ResultsController extends Controller
{

    /**
     * @param Request $request
     * @return LengthAwarePaginator
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function index(Request $request): LengthAwarePaginator
    {
        return StudentExam::with([
            'exam:id,label,score',
            'student:id,name,email'
        ])
        ->paginate($request->input('per_page', 10));
    }
}
