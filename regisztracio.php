<?php
    $mysqli = require "connect.php";

    $fnev = $_POST['fnev'];
    $jelszo = $_POST['jelszo'];
    $jelszo_ujra = $_POST['ujrajelszo'];

    if(empty($fnev) || empty($jelszo)) {
        die("A felhasználónevet vagy a jelszót üresen hagytad!");
    }

    if (strlen($jelszo) < 6)
    {
        die("Legalább 6 karakterből kell állnia.");
    }

    if (!preg_match("/[a-z]/i", $fnev))
    {
        die("Szerepelnie kell betűnek a felhasználónévben.");
    }

    if (!preg_match("/[a-z]/i", $jelszo))
    {
        die("Szerepelnie kell betűnek a jelszóban.");
    }

    if($jelszo !== $jelszo_ujra){
        die('A jelszavak nem egyeznek.');
    }

    $sql = "INSERT INTO users (username, password)
        VALUES(?, ?)";

    $stmt = $mysqli->stmt_init();

    if(! $stmt->prepare($sql)){
        die("SQL Error: " . $mysqli->error);
    }

    $jelszo_hash = password_hash($jelszo, PASSWORD_DEFAULT);

    $stmt->bind_param("ss", $fnev, $jelszo_hash);

    try{
        $stmt->execute();
        header("Location: index.html");

        }catch(Exeption $e)
    {
        die('Hiba lépett fel');
    }
?>