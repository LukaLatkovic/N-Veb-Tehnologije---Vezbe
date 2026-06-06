<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::latest()->get();

        return view('courses.index', compact('courses'));
    }

    public function create()
    {
        return view('courses.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'code' => ['required', 'string', 'max:50', 'unique:courses,code'],
            'description' => ['nullable', 'string'],
        ]);

        Course::create($validated);

        return redirect()
            ->route('courses.index')
            ->with('success', 'Kurs je uspešno dodat.');
    }

    public function show(Course $course)
    {
        $course->load('students');

        return view('courses.show', compact('course'));
    }

    public function edit(Course $course)
    {
        return view('courses.edit', compact('course'));
    }

    public function update(Request $request, Course $course)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'code' => ['required', 'string', 'max:50', 'unique:courses,code,' . $course->id],
            'description' => ['nullable', 'string'],
        ]);

        $course->update($validated);

        return redirect()
            ->route('courses.index')
            ->with('success', 'Kurs je uspešno izmenjen.');
    }

    public function destroy(Course $course)
    {
        $course->delete();

        return redirect()
            ->route('courses.index')
            ->with('success', 'Kurs je uspešno obrisan.');
    }
}