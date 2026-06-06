@extends('layouts.app')

@section('title', 'Kursevi')

@section('content')
    <h1>Kursevi</h1>

    <p>
        Evidencija kurseva u Laravel aplikaciji.
    </p>

    <p>
        <a class="button" href="{{ route('courses.create') }}">
            Dodaj novi kurs
        </a>
    </p>

    @if (session('success'))
        <div class="success">
            {{ session('success') }}
        </div>
    @endif

    @if ($courses->isEmpty())
        <p>Trenutno nema unetih kurseva.</p>
    @else
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Naziv kursa</th>
                    <th>Oznaka kursa</th>
                    <th>Opis</th>
                    <th>Akcije</th>
                </tr>
            </thead>

            <tbody>
                @foreach ($courses as $course)
                    <tr>
                        <td>{{ $course->id }}</td>
                        <td>{{ $course->name }}</td>
                        <td>{{ $course->code }}</td>
                        <td>{{ $course->description ?: '-' }}</td>
                        <td>
                            <div class="actions">
                                <a href="{{ route('courses.show', $course) }}">
                                    Prikaži
                                </a>

                                <a href="{{ route('courses.edit', $course) }}">
                                    Izmeni
                                </a>

                                <form
                                    class="inline-form"
                                    action="{{ route('courses.destroy', $course) }}"
                                    method="POST"
                                    onsubmit="return confirm('Da li ste sigurni da želite da obrišete kurs?')"
                                >
                                    @csrf
                                    @method('DELETE')

                                    <button class="danger" type="submit">
                                        Obriši
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @endif
@endsection