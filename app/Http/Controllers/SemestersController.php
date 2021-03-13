<?php

namespace App\Http\Controllers;

use App\Models\AcademicYear;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;

class SemestersController extends Controller
{
    public function index(Request $request): LengthAwarePaginator
    {
        return AcademicYear::where('current', 1)
            ->first()
            ->semesters()
            ->paginate((int)$request->input('per_page', 10));
    }
}
