<?php

class Student
{
    private PDO $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function procitajSve(): array
    {
        $upit = "SELECT * FROM students ORDER BY id DESC";
        $izjava = $this->pdo->query($upit);

        return $izjava->fetchAll(PDO::FETCH_ASSOC);
    }

    public function procitajJednog(int $id): array|false
    {
        $upit = "SELECT * FROM students WHERE id = :id";
        $izjava = $this->pdo->prepare($upit);
        $izjava->execute([':id' => $id]);

        return $izjava->fetch(PDO::FETCH_ASSOC);
    }

    public function dodaj(string $ime, string $email, int $godine): bool
    {
        $upit = "
            INSERT INTO students (name, email, age)
            VALUES (:ime, :email, :godine)
        ";

        $izjava = $this->pdo->prepare($upit);

        return $izjava->execute([
            ':ime' => $ime,
            ':email' => $email,
            ':godine' => $godine
        ]);
    }

    public function azuriraj(int $id, string $ime, string $email, int $godine): bool
    {
        $upit = "
            UPDATE students
            SET name = :ime,
                email = :email,
                age = :godine
            WHERE id = :id
        ";

        $izjava = $this->pdo->prepare($upit);

        return $izjava->execute([
            ':id' => $id,
            ':ime' => $ime,
            ':email' => $email,
            ':godine' => $godine
        ]);
    }

    public function obrisi(int $id): bool
    {
        $upit = "DELETE FROM students WHERE id = :id";
        $izjava = $this->pdo->prepare($upit);

        return $izjava->execute([':id' => $id]);
    }
}