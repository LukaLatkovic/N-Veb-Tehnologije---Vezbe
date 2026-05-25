<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Middleware\LogActivity;

Route::get('/', [StudentController::class, 'index'])
    ->middleware(LogActivity::class);

Route::resource('students', StudentController::class)
    ->middleware(LogActivity::class);