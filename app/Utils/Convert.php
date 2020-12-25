<?php


namespace App\Utils;

use Exception;

class Convert
{
    /**
     * @param string $name
     * @return string
     * @throws Exception
     * @author Ibrahim Sakr <ebrahim.sakr@speakol.com>
     */
    public static function toModelName(string $name): string
    {
        $className = 'App\\Models\\' . ucfirst($name);

        if (!class_exists($className)) {
            throw new Exception('Model Not Found');
        }

        return $className;
    }
}
