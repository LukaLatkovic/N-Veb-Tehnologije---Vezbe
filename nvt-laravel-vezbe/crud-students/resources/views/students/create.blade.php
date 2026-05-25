@extends('layouts.app')

@section('title', 'Dodaj studenta')

@section('content')
    <h1>Dodaj novog studenta</h1>

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

    <form method="POST" action="{{ route('students.store') }}">
        @csrf

        <label>
            Ime:
            <input
                type="text"
                name="first_name"
                value="{{ old('first_name') }}"
                required
            >
        </label>

        <label>
            Prezime:
            <input
                type="text"
                name="last_name"
                value="{{ old('last_name') }}"
                required
            >
        </label>

        <label>
            E-pošta:
            <input
                type="email"
                name="email"
                value="{{ old('email') }}"
                required
            >
        </label>

        <label>
            Broj indeksa:
            <input
                type="number"
                name="index_number"
                value="{{ old('index_number') }}"
                required
            >
        </label>

        <button type="submit">Sačuvaj</button>
    </form>
@endsection