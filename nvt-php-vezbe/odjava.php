<?php
session_start();

$_SESSION = [];

if (ini_get('session.use_cookies')) {
    $params = session_get_cookie_params();

    setcookie(
        session_name(),
        '',
        time() - 42000,
        $params['path'],
        $params['domain'],
        $params['secure'],
        $params['httponly']
    );
}

session_destroy();
?>

<!DOCTYPE html>
<html lang="sr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Odjava</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body class="min-h-screen bg-stone-50 text-slate-900">
    <main class="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16">
        <p class="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-emerald-700">
            Sesija završena
        </p>

        <h1 class="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Uspešno ste se odjavili
        </h1>

        <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Podaci iz sesije su obrisani. Možete se vratiti na formu i ponovo uneti podatke.
        </p>

        <div class="mt-10">
            <a
                href="forma.php"
                class="bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
                Nazad na formu
            </a>
        </div>
    </main>
</body>
</html>