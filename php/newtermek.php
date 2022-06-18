<?php
    include("connect.php");

    if(!isset($_SERVER['HTTP_REFERER'])) {
        header('location:../index.html');
        exit;
    }

    if($_POST) {
        $nev = $_POST["termekWindowNev"];
        $szin = $_POST["termekWindowSzin"];
        $minta = $_POST["termekWindowMinta"];
        $raktaron = $_POST["termekWindowRaktaron"];
        $leiras = $_POST["termekWindowLeiras"];
        $kep = $_POST["termekWindowKep"];
        $tovabbiKepek = $_POST["termekWindowKepek"];
    }
?>