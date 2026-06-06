<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Middleware\LogActivity;
use App\Http\Controllers\CourseController;

Route::get('/', [StudentController::class, 'index'])
    ->middleware(LogActivity::class);

Route::resource('students', StudentController::class)
    ->middleware(LogActivity::class);

Route::resource('courses', CourseController::class);

Route::get('students/{student}/enroll', [StudentController::class, 'enrollForm'])
    ->name('students.enrollForm');

Route::post('students/{student}/enroll', [StudentController::class, 'enroll'])
    ->name('students.enroll');