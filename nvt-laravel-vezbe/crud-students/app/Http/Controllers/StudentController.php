<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use App\Models\Course;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::latest()->get();

        return view('students.index', compact('students'));
    }

    public function create()
    {
        return view('students.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:students,email',
            'index_number' => 'required|integer|min:1|unique:students,index_number',
        ]);

        Student::create($request->all());

        return redirect()
            ->route('students.index')
            ->with('success', 'Student je uspešno dodat.');
    }

    public function show(Student $student)
    {
        $student->load('courses');

        return view('students.show', compact('student'));
    }

    public function edit(Student $student)
    {
        return view('students.edit', compact('student'));
    }

    public function update(Request $request, Student $student)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:students,email,' . $student->id,
            'index_number' => 'required|integer|min:1|unique:students,index_number,' . $student->id,
        ]);

        $student->update($request->all());

        return redirect()
            ->route('students.index')
            ->with('success', 'Podaci studenta su uspešno ažurirani.');
    }

    public function destroy(Student $student)
    {
        $student->delete();

        return redirect()
            ->route('students.index')
            ->with('success', 'Student je uspešno obrisan.');
    }

    public function enrollForm(Student $student)
    {
        $courses = Course::orderBy('name')->get();

        $student->load('courses');

        return view('students.enroll', compact('student', 'courses'));
    }

    public function enroll(Request $request, Student $student)
    {
        $validated = $request->validate([
            'courses' => ['nullable', 'array'],
            'courses.*' => ['exists:courses,id'],
        ]);

        $student->courses()->sync($validated['courses'] ?? []);

        return redirect()
            ->route('students.show', $student)
            ->with('success', 'Upis studenta na kurseve je uspešno ažuriran.');
    }
}