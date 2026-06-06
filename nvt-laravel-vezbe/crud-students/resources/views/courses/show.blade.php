@extends('layouts.app')

@section('title', 'Detalji kursa')

@section('content')
    <h1>Detalji kursa</h1>

    <p>
        <a href="{{ route('courses.index') }}">Nazad na listu kurseva</a>
    </p>

    <div class="details">
        <p><strong>ID:</strong> {{ $course->id }}</p>
        <p><strong>Naziv kursa:</strong> {{ $course->name }}</p>
        <p><strong>Oznaka kursa:</strong> {{ $course->code }}</p>
        <p><strong>Opis kursa:</strong> {{ $course->description ?: '-' }}</p>
    </div>

    <h2>Studenti upisani na ovaj kurs</h2>

    @if ($course->students->isEmpty())
        <p>Nema studenata upisanih na ovaj kurs.</p>
    @else
        <table>
            <thead>
                <tr>
                    <th>Ime</th>
                    <th>Prezime</th>
                    <th>Broj indeksa</th>
                </tr>
            </thead>

            <tbody>
                @foreach ($course->students as $student)
                    <tr>
                        <td>{{ $student->first_name }}</td>
                        <td>{{ $student->last_name }}</td>
                        <td>{{ $student->index_number }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @endif

    <p>
        <a class="button" href="{{ route('courses.edit', $course) }}">
            Izmeni kurs
        </a>
    </p>
@endsection