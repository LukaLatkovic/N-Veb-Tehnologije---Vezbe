<!DOCTYPE html>
<html lang="sr">
<head>
    <meta charset="UTF-8">
    <title>@yield('title', 'CRUD Studenti')</title>

    <style>
        body {
            margin: 0;
            padding: 40px;
            font-family: Arial, sans-serif;
            background: #f4f6f9;
            color: #222;
        }

        .container {
            max-width: 1100px;
            margin: 0 auto;
        }

        h1 {
            color: #660000;
            margin-bottom: 10px;
        }

        p {
            line-height: 1.6;
        }

        a {
            color: #990000;
            text-decoration: none;
            font-weight: bold;
        }

        a:hover {
            color: #660000;
            text-decoration: underline;
        }

        .top-bar {
            margin-bottom: 25px;
        }

        .button,
        button {
            display: inline-block;
            padding: 10px 14px;
            background: #990000;
            color: white;
            border: none;
            cursor: pointer;
            font-weight: bold;
            text-decoration: none;
        }

        .button:hover,
        button:hover {
            background: #660000;
            color: white;
            text-decoration: none;
        }

        .button-secondary {
            background: #333;
        }

        .button-secondary:hover {
            background: #111;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            margin-top: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.08);
        }

        th,
        td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }

        th {
            background: #990000;
            color: white;
        }

        tr:nth-child(even) {
            background: #f9f9f9;
        }

        form {
            max-width: 460px;
            background: white;
            padding: 18px;
            margin-top: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.08);
        }

        label {
            display: block;
            margin-bottom: 14px;
            font-weight: bold;
        }

        input,
        textarea {
            display: block;
            width: 100%;
            padding: 9px;
            margin-top: 6px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            font-family: Arial, sans-serif;
        }

        textarea {
            min-height: 110px;
            resize: vertical;
        }

        .actions {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .inline-form {
            display: inline;
            padding: 0;
            margin: 0;
            background: none;
            box-shadow: none;
        }

        .danger {
            background: #b91c1c;
        }

        .danger:hover {
            background: #7f1d1d;
        }

        .success {
            padding: 12px;
            background: #e8f5e9;
            color: #166534;
            border-left: 4px solid #166534;
            margin: 20px 0;
        }

        .errors {
            padding: 12px;
            background: #fee2e2;
            color: #991b1b;
            border-left: 4px solid #991b1b;
            margin: 20px 0;
        }

        .details {
            background: white;
            padding: 18px;
            max-width: 520px;
            margin-top: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.08);
        }

        .details p {
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <main class="container">
        @yield('content')
    </main>
</body>
</html>