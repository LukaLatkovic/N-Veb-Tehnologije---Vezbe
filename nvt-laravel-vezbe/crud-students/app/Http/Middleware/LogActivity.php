<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class LogActivity
{
    public function handle(Request $request, Closure $next): Response
    {
        Log::info('Korisnička aktivnost', [
            'method' => $request->method(),
            'path' => $request->path(),
            'url' => $request->fullUrl(),
            'ip' => $request->ip(),
            'user' => auth()->user()->id ?? "Gost",
            'time' => now()->toDateTimeString(),
        ]);

        return $next($request);
    }
}