<?php

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../models/Student.php';

$studentModel = new Student($pdo);
$studenti = $studentModel->procitajSve();

function e(string|int|null $value): string
{
    return htmlspecialchars((string)$value, ENT_QUOTES, 'UTF-8');
}
?>

<!DOCTYPE html>
<html lang="sr">
<head>
    <meta charset="UTF-8">
    <title>Vežba 20.1 - Spisak studenata</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>

<h1>Vežba 20.1 - Spisak studenata</h1>

<p>
    Osnovna PHP CRUD aplikacija za rad sa studentima.
</p>

<p>
    <a href="create.php">Dodaj novog studenta</a>
</p>

<?php if (empty($studenti)): ?>

    <p>Trenutno nema unetih studenata.</p>

<?php else: ?>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Ime</th>
                <th>E-pošta</th>
                <th>Godina</th>
                <th>Datum kreiranja</th>
                <th>Akcije</th>
            </tr>
        </thead>

        <tbody>
            <?php foreach ($studenti as $student): ?>
                <tr>
                    <td><?= e($student['id']) ?></td>
                    <td><?= e($student['name']) ?></td>
                    <td><?= e($student['email']) ?></td>
                    <td><?= e($student['age']) ?></td>
                    <td><?= e($student['created_at'] ?? '-') ?></td>
                    <td>
                        <a href="update.php?id=<?= e($student['id']) ?>">Izmeni</a>
                        |
                        <a
                            href="delete.php?id=<?= e($student['id']) ?>"
                            onclick="return confirm('Da li ste sigurni da želite da obrišete ovog studenta?')"
                        >
                            Obriši
                        </a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

<?php endif; ?>

</body>
</html>