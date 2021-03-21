<?php

namespace App\Http\Controllers;

use App\Utils\Convert;

class ImageController extends Controller
{
    /**
     * @param string $modelType
     * @param int $modelId
     * @return mixed
     * @throws \Exception
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function upload(string $modelType, int $modelId)
    {
        $model = Convert::toModelName($modelType)::find($modelId);

        $model->addMediaFromRequest('image')->toMediaCollection('images');

        return $model->getMedia('images')->first()->toArray();
    }

    /**
     * @param string $modelType
     * @param int $modelId
     * @return mixed
     * @throws \Exception
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public function remove(string $modelType, int $modelId)
    {
        $model = Convert::toModelName($modelType)::find($modelId);

        $model->getMedia('images')->first()->delete();

        return $model->getMedia('images');
    }
}
