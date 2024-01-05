<?php

$host = "mysql.caesar.elte.hu";
$dbname = "melkemate";
$username = "melkemate";
$password = "t0fzHo4VHE0JgjBq";

$mysqli = new mysqli($host, $username, $password, $dbname);

if ($mysqli->connect_error)
    {
        die('Connection Failed : '.$mysqli->connect_error);
    }

return $mysqli;
?>