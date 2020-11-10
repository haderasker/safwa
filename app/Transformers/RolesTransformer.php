<?php

namespace App\Transformers;

use Illuminate\Support\Collection;

class RolesTransformer
{
    public static function transform(Collection $roles): Collection
    {
        return $roles->map(function($role) {
            return $role->name;
        });
    }
}
