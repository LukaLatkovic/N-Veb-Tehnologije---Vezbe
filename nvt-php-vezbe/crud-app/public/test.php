<?php

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../models/Student.php';

$studentModel = new Student($pdo);
$studenti = $studentModel->procitajSve();

echo '<pre>';
print_r($studenti);
echo '</pre>';