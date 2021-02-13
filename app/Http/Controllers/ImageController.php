<?php

namespace App\Http\Controllers;

use App\Utils\Convert;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    /**
     * @param Request $request
     * @param int $modelId
     * @param string $modelType
     * @throws \Exception
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function upload(string $modelType, int $modelId)
    {
        $model = Convert::toModelName($modelType)::find($modelId);

        $model->addMediaFromRequest('image')->toMediaCollection('images');

        return $model->getMedia('images')->first()->getUrl();
    }

    public function remove(string $modelType, int $modelId)
    {
        $model = Convert::toModelName($modelType)::find($modelId);

        $model->getMedia('images')->first()->delete();

        return $model->getMedia('images');
    }
}
