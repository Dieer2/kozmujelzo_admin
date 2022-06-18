<?php

    if(!isset($_SERVER['HTTP_REFERER'])) {
        header('location:../index.html');
        exit;
    }

    $serverData = parse_ini_file("php.ini");

    $host = $serverData["host"];
    $username = $serverData["user"];
    $password = $serverData["pass"];
    $dbname = $serverData["name"];

    $connection = new mysqli($host, $username, $password, $dbname);

    if($connection->connect_error) {
        die("Nem sikerült az adatbázishoz való kapcsolódás: ". $connection->connect_error);
    }
?>