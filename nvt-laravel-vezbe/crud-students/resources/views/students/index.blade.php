@extends('layouts.app')

@section('title', 'Spisak studenata')

@section('content')
    <h1>Spisak studenata</h1>

    <p>
        Laravel CRUD aplikacija za prikaz, dodavanje, izmenu i brisanje studenata.
    </p>

    <div class="top-bar">
        <a class="button" href="{{ route('students.create') }}">
            Dodaj novog studenta
        </a>
    </div>

    @if (session('success'))
        <div class="success">
            {{ session('success') }}
        </div>
    @endif

    @if ($students->isEmpty())
        <p>Trenutno nema unetih studenata.</p>
    @else
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Ime</th>
                    <th>Prezime</th>
                    <th>E-pošta</th>
                    <th>Broj indeksa</th>
                    <th>Akcije</th>
                </tr>
            </thead>

            <tbody>
                @foreach ($students as $student)
                    <tr>
                        <td>{{ $student->id }}</td>
                        <td>{{ $student->first_name }}</td>
                        <td>{{ $student->last_name }}</td>
                        <td>{{ $student->email }}</td>
                        <td>{{ $student->index_number }}</td>
                        <td>
                            <div class="actions">
                                <a href="{{ route('students.show', $student) }}">Prikaži</a>
                                <a href="{{ route('students.edit', $student) }}">Izmeni</a>

                                <form
                                    class="inline-form"
                                    action="{{ route('students.destroy', $student) }}"
                                    method="POST"
                                    onsubmit="return confirm('Da li ste sigurni da želite da obrišete studenta?')"
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