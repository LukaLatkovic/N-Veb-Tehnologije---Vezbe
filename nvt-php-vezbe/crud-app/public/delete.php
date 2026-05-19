<?php

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../models/Student.php';

$studentModel = new Student($pdo);

$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

if (!$id) {
    die('Nedostaje ili nije ispravan ID studenta.');
}

$student = $studentModel->procitajJednog($id);

if (!$student) {
    die('Student nije pronađen.');
}

$studentModel->obrisi($id);

header('Location: index.php');
exit;