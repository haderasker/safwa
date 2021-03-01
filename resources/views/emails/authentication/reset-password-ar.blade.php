URL: {{ config('app.url') . 'reset-password?email=' . urlencode($user->email) . '&token=' . $token }}
