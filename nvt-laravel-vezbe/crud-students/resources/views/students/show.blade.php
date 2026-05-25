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
@endsection