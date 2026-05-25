@extends('layouts.app')

@section('title', 'Izmena studenta')

@section('content')
    <h1>Izmena studenta</h1>

    <p>
        <a href="{{ route('students.index') }}">Nazad na spisak studenata</a>
    </p>

    @if ($errors->any())
        <div class="errors">
            <strong>Ispravite greške u formi:</strong>

            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form method="POST" action="{{ route('students.update', $student) }}">
        @csrf
        @method('PUT')

        <label>
            Ime:
            <input
                type="text"
                name="first_name"
                value="{{ old('first_name', $student->first_name) }}"
                required
            >
        </label>

        <label>
            Prezime:
            <input
                type="text"
                name="last_name"
                value="{{ old('last_name', $student->last_name) }}"
                required
            >
        </label>

        <label>
            E-pošta:
            <input
                type="email"
                name="email"
                value="{{ old('email', $student->email) }}"
                required
            >
        </label>

        <label>
            Broj indeksa:
            <input
                type="number"
                name="index_number"
                value="{{ old('index_number', $student->index_number) }}"
                required
            >
        </label>

        <button type="submit">Ažuriraj</button>
    </form>
@endsection