<?php
session_start();

$ime = '';
$email = '';
$poruke = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $ime = trim($_POST['ime'] ?? '');
    $email = trim($_POST['email'] ?? '');

    if ($ime === '') {
        $poruke[] = 'Ime je obavezno.';
    } elseif (!preg_match('/^[\p{L} ]+$/u', $ime)) {
        $poruke[] = 'Ime može sadržati samo slova i razmake.';
    }

    if ($email === '') {
        $poruke[] = 'E-pošta je obavezna.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $poruke[] = 'E-pošta nije u ispravnom formatu.';
    }

    if (empty($poruke)) {
        $_SESSION['korisnik'] = [
            'ime' => $ime,
            'email' => $email
        ];

        header('Location: pregled.php');
        exit;
    }
}
?>

<!DOCTYPE html>
<html lang="sr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vežba 19.1 - Forma</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body class="min-h-screen bg-stone-50 text-slate-900">
    <main class="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16">

        <h1 class="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Vežba 19.1 — Osnovna obrada obrasca
        </h1>

        <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Forma se obrađuje na serveru pomoću PHP-a. Podaci se validiraju,
            bezbedno prikazuju i čuvaju u sesiji.
        </p>

        <section class="mt-12 max-w-2xl">
            <div class="mb-8 h-1 w-20 bg-emerald-700"></div>

            <h2 class="text-2xl font-semibold tracking-tight text-slate-950">
                Podaci korisnika
            </h2>

            <p class="mt-3 leading-7 text-slate-600">
                Unesite ime i e-poštu. Polja označena zvezdicom su obavezna.
            </p>

            <form method="post" action="forma.php" class="mt-8 space-y-6">
                <div>
                    <label for="ime" class="mb-2 block text-sm font-medium text-slate-700">
                        Ime <span class="text-red-600">*</span>
                    </label>

                    <input
                        type="text"
                        id="ime"
                        name="ime"
                        placeholder="Unesite ime"
                        value="<?= htmlspecialchars($ime, ENT_QUOTES, 'UTF-8') ?>"
                        class="w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-700"
                    >
                </div>

                <div>
                    <label for="email" class="mb-2 block text-sm font-medium text-slate-700">
                        E-pošta <span class="text-red-600">*</span>
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="ime.prezime@example.com"
                        value="<?= htmlspecialchars($email, ENT_QUOTES, 'UTF-8') ?>"
                        class="w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-700"
                    >
                </div>

                <div class="flex flex-wrap items-center gap-4 pt-4">
                    <button
                        type="submit"
                        class="bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
                    >
                        Sačuvaj podatke
                    </button>

                    <a
                        href="pregled.php"
                        class="px-2 py-3 text-sm font-semibold text-slate-600 transition hover:text-emerald-700"
                    >
                        Pregled podataka
                    </a>

                    <p class="text-sm text-slate-500">
                        <span class="text-red-600">*</span> obavezna polja
                    </p>
                </div>
            </form>

            <?php if (!empty($poruke)): ?>
                <div class="mt-10 space-y-2">
                    <?php foreach ($poruke as $poruka): ?>
                        <p class="font-medium text-red-600">
                            <?= htmlspecialchars($poruka, ENT_QUOTES, 'UTF-8') ?>
                        </p>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
        </section>
    </main>
</body>
</html>