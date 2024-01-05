<?php
session_start();

function kapcsolodas($kapcsolati_szoveg, $felhasznalonev = '', $jelszo = '') {
    $pdo = new PDO($kapcsolati_szoveg, $felhasznalonev, $jelszo);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}

$kapcsolat = kapcsolodas('mysql:host=mysql.caesar.elte.hu;dbname=melkemate;', 'melkemate', 't0fzHo4VHE0JgjBq');

if(empty($_POST["fnev"]) || empty($_POST["jelszo"])) {
    die("A felhasználónevet vagy a jelszót üresen hagytad!");
}

$stmt = $kapcsolat->prepare("SELECT ID, password FROM users WHERE username = :fnev");
$stmt->execute([
    "fnev" => $_POST["fnev"],
]);

$user = $stmt->fetch();

if ($user && password_verify($_POST["jelszo"], $user["password"])) {
    echo "sikeres bejelentkezés";
    $_SESSION["id"] = $user["ID"];
    header("Location: egyjatekos.html");
    exit();
} else {
    echo "hibás felhasználónév vagy jelszó";
}
?>
