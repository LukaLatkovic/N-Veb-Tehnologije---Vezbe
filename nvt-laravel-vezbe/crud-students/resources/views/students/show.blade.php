@extends('layouts.app')

@section('title', 'Detalji studenta')

@section('content')
    <h1>Detalji studenta</h1>

    <p>
        <a href="{{ route('students.index') }}">Nazad na spisak studenata</a>
    </p>

    <div class="details">
        <p><strong>ID:</strong> {{ $student->id }}</p>
        <p><strong>Ime:</strong> {{ $student->first_name }}</p>
        <p><strong>Prezime:</strong> {{ $student->last_name }}</p>
        <p><strong>E-pošta:</strong> {{ $student->email }}</p>
        <p><strong>Broj indeksa:</strong> {{ $student->index_number }}</p>
        <p><strong>Kreiran:</strong> {{ $student->created_at }}</p>
        <p><strong>Izmenjen:</strong> {{ $student->updated_at }}</p>
    </div>

    <p>
        <a class="button" href="{{ route('students.edit', $student) }}">
            Izmeni studenta
        </a>
    </p>

    <h2>Kursevi na koje je student upisan</h2>

    @if ($student->courses->isEmpty())
        <p>Student trenutno nije upisan ni na jedan kurs.</p>
    @else
        <table>
            <thead>
                <tr>
                    <th>Naziv kursa</th>
                    <th>Oznaka</th>
                    <th>Opis</th>
                </tr>
            </thead>

            <tbody>
                @foreach ($student->courses as $course)
                    <tr>
                        <td>{{ $course->name }}</td>
                        <td>{{ $course->code }}</td>
                        <td>{{ $course->description ?: '-' }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @endif

    <p>
        <a class="button" href="{{ route('students.enrollForm', $student) }}">
            Uredi upis na kurseve
        </a>
    </p>
@endsection