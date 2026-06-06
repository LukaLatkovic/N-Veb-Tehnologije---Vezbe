@extends('layouts.app')

@section('title', 'Upis studenta na kurseve')

@section('content')
    <h1>Upis studenta na kurseve</h1>

    <p>
        Student:
        <strong>{{ $student->first_name }} {{ $student->last_name }}</strong>
        —
        {{ $student->index_number }}
    </p>

    <p>
        <a href="{{ route('students.show', $student) }}">Nazad na detalje studenta</a>
    </p>

    @if ($errors->any())
        <div class="errors">
            <strong>Ispravite greške:</strong>

            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    @if ($courses->isEmpty())
        <p>Trenutno nema unetih kurseva. Prvo dodajte kurs.</p>

        <p>
            <a class="button" href="{{ route('courses.create') }}">
                Dodaj kurs
            </a>
        </p>
    @else
        <form method="POST" action="{{ route('students.enroll', $student) }}">
            @csrf

            <table>
                <thead>
                    <tr>
                        <th>Izaberi</th>
                        <th>Naziv kursa</th>
                        <th>Oznaka</th>
                        <th>Opis</th>
                    </tr>
                </thead>

                <tbody>
                    @foreach ($courses as $course)
                        <tr>
                            <td>
                                <input
                                    type="checkbox"
                                    name="courses[]"
                                    value="{{ $course->id }}"
                                    {{ $student->courses->contains($course->id) ? 'checked' : '' }}
                                >
                            </td>

                            <td>{{ $course->name }}</td>
                            <td>{{ $course->code }}</td>
                            <td>{{ $course->description ?: '-' }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>

            <p>
                <button type="submit">
                    Sačuvaj upis
                </button>

                <a class="button button-secondary" href="{{ route('students.show', $student) }}">
                    Odustani
                </a>
            </p>
        </form>
    @endif
@endsection