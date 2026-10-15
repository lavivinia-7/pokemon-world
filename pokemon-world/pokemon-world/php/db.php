<?php

$host = "localhost";
$banco = "pokemon_world";
$usuario = "root";
$senha = "";

try {
    // PDO = PHP Data Objects, uma forma segura de conectar no banco
    $pdo = new PDO(
        "mysql:host=$host;dbname=$banco;charset=utf8mb4",
        $usuario,
        $senha
    );

    // Faz o PDO avisar com um erro claro se algo der errado,
    // em vez de falhar silenciosamente
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $erro) {
    die("Não foi possível conectar ao banco de dados: " . $erro->getMessage());
}
