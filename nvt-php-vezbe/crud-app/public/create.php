<?php

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../models/Student.php';

$studentModel = new Student($pdo);

$ime = '';
$email = '';
$godine = '';
$greske = [];

function e(string|int|null $value): string
{
    return htmlspecialchars((string)$value, ENT_QUOTES, 'UTF-8');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $ime = trim($_POST['ime'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $godine = trim($_POST['godine'] ?? '');

    if ($ime === '') {
        $greske[] = 'Ime je obavezno.';
    } elseif (!preg_match('/^[\p{L} ]+$/u', $ime)) {
        $greske[] = 'Ime može sadržati samo slova i razmake.';
    }

    if ($email === '') {
        $greske[] = 'E-pošta je obavezna.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $greske[] = 'E-pošta nije u ispravnom formatu.';
    }

    if ($godine === '') {
        $greske[] = 'Godina studija je obavezna.';
    } elseif (!filter_var($godine, FILTER_VALIDATE_INT)) {
        $greske[] = 'Godina studija mora biti broj.';
    } elseif ((int)$godine < 1 || (int)$godine > 6) {
        $greske[] = 'Godina studija mora biti između 1 i 6.';
    }

    if (empty($greske)) {
        try {
            $studentModel->dodaj($ime, $email, (int)$godine);

            header('Location: index.php');
            exit;
        } catch (PDOException $e) {
            $greske[] = 'Student sa ovom e-poštom već postoji.';
        }
    }
}
?>

<!DOCTYPE html>
<html lang="sr">
<head>
    <meta charset="UTF-8">
    <title>Dodaj studenta</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>

<h1>Dodaj novog studenta</h1>

<p>
    <a href="index.php">Nazad na spisak studenata</a>
</p>

<?php if (!empty($greske)): ?>
    <ul>
        <?php foreach ($greske as $greska): ?>
            <li>
                <strong><?= e($greska) ?></strong>
            </li>
        <?php endforeach; ?>
    </ul>
<?php endif; ?>

<form method="post" action="create.php">
    <label for="ime">
        Ime:
        <input
            type="text"
            id="ime"
            name="ime"
            value="<?= e($ime) ?>"
            required
        >
    </label>

    <label for="email">
        E-pošta:
        <input
            type="email"
            id="email"
            name="email"
            value="<?= e($email) ?>"
            required
        >
    </label>

    <label for="godine">
        Godina studija:
        <input
            type="number"
            id="godine"
            name="godine"
            min="1"
            max="6"
            value="<?= e($godine) ?>"
            required
        >
    </label>

    <button type="submit">Sačuvaj</button>
</form>

</body>
</html>