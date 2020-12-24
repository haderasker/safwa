<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Collection;

/**
 * Class AcademicYearsController
 * @package App\Http\Controllers
 * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
 */
class AcademicYearsController extends Controller
{
    /**
     * @return Collection
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function index(): Collection
    {
        return collect([]);
    }
}
