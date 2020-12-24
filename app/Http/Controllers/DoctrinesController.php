<?php

namespace App\Http\Controllers;

use App\Models\Doctrine;
use Illuminate\Database\Eloquent\Collection;

/**
 * Class DoctrinesController
 * @package App\Http\Controllers
 * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
 */
class DoctrinesController extends Controller
{
    /**
     * @return Collection
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function index(): Collection
    {
        return Doctrine::all();
    }
}
