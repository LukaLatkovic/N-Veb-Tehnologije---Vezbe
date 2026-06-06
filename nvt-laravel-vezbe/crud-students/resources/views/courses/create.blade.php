@extends('layouts.app')

@section('title', 'Dodaj kurs')

@section('content')
    <h1>Dodaj novi kurs</h1>

    <p>
        <a href="{{ route('courses.index') }}">Nazad na listu kurseva</a>
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

    <form method="POST" action="{{ route('courses.store') }}">
        @csrf

        <label>
            Naziv kursa:
            <input
                type="text"
                name="name"
                value="{{ old('name') }}"
                required
            >
        </label>

        <label>
            Oznaka kursa:
            <input
                type="text"
                name="code"
                value="{{ old('code') }}"
                required
            >
        </label>

        <label>
            Opis kursa:
            <textarea name="description">{{ old('description') }}</textarea>
        </label>

        <button type="submit">Sačuvaj</button>
    </form>
@endsection