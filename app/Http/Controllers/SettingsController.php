<?php

namespace App\Http\Controllers;

use App\Models\Settings;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function fetch(Request $request)
    {
        return Settings::select('key', 'value')->whereIn('key', $request->input('keys', []))->get();
    }

    public function set(Request $request)
    {
        $inputs = $request->all();

        foreach($inputs as $key => $value) {
            Settings::firstOrCreate([
                'key' => $key
            ])->update([
                'value' => $value
            ]);
        }

        return response(null, 204);
    }
}
