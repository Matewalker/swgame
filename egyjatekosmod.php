<?php
    session_start();

    if ( ! isset($_SESSION["id"])) {
        header("Location: bejelentkezes.html");
        exit();
    }

    $id = $_SESSION["id"];
    $gyoztes = $_POST["winner"];

    function kapcsolodas($kapcsolati_szoveg, $felhasznalonev = '', $jelszo = '') {
        $pdo = new PDO($kapcsolati_szoveg, $felhasznalonev, $jelszo);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    }
    
    $kapcsolat = kapcsolodas('mysql:host=mysql.caesar.elte.hu;dbname=melkemate;', 'melkemate', 't0fzHo4VHE0JgjBq');

    if($gyoztes == 1){
        $updateQuery = "UPDATE users SET `pontok` = `pontok` + 1 WHERE ID = ?";
        $stmtUpdate = $kapcsolat->prepare($updateQuery);

        if ($stmtUpdate->execute([$id])) {
            echo "Record updated successfully";
        } else {
            echo "Error updating record: " . $stmtUpdate->errorInfo()[2];
        }
    }
?>