@extends('layouts.app')

@section('title', 'Izmena kursa')

@section('content')
    <h1>Izmena kursa</h1>

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

    <form method="POST" action="{{ route('courses.update', $course) }}">
        @csrf
        @method('PUT')

        <label>
            Naziv kursa:
            <input
                type="text"
                name="name"
                value="{{ old('name', $course->name) }}"
                required
            >
        </label>

        <label>
            Oznaka kursa:
            <input
                type="text"
                name="code"
                value="{{ old('code', $course->code) }}"
                required
            >
        </label>

        <label>
            Opis kursa:
            <textarea name="description">{{ old('description', $course->description) }}</textarea>
        </label>

        <button type="submit">Izmeni</button>
    </form>
@endsection