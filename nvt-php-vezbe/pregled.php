<?php
session_start();

$korisnik = $_SESSION['korisnik'] ?? null;
?>

<!DOCTYPE html>
<html lang="sr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pregled podataka</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body class="min-h-screen bg-stone-50 text-slate-900">
    <main class="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16">

        <h1 class="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Sačuvani podaci
        </h1>

        <?php if ($korisnik): ?>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Podaci su preuzeti iz PHP sesije i bezbedno prikazani na ovoj stranici.
            </p>

            <section class="mt-12 max-w-2xl">
                <div class="mb-8 h-1 w-20 bg-emerald-700"></div>

                <dl class="space-y-4 text-slate-700">
                    <div class="grid gap-1 sm:grid-cols-[120px_1fr]">
                        <dt class="font-medium text-slate-950">Ime</dt>
                        <dd>
                            <?= htmlspecialchars($korisnik['ime'], ENT_QUOTES, 'UTF-8') ?>
                        </dd>
                    </div>

                    <div class="grid gap-1 sm:grid-cols-[120px_1fr]">
                        <dt class="font-medium text-slate-950">E-pošta</dt>
                        <dd>
                            <?= htmlspecialchars($korisnik['email'], ENT_QUOTES, 'UTF-8') ?>
                        </dd>
                    </div>
                </dl>

                <div class="mt-10 flex flex-wrap items-center gap-4">
                    <a
                        href="forma.php"
                        class="bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
                    >
                        Nazad na formu
                    </a>

                    <a
                        href="odjava.php"
                        class="px-2 py-3 text-sm font-semibold text-slate-600 transition hover:text-emerald-700"
                    >
                        Odjavi se
                    </a>
                </div>
            </section>
        <?php else: ?>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Trenutno nema sačuvanih podataka u sesiji.
            </p>

            <div class="mt-10">
                <a
                    href="forma.php"
                    class="bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
                >
                    Idi na formu
                </a>
            </div>
        <?php endif; ?>
    </main>
</body>
</html>