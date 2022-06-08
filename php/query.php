<?php
    include("connect.php");

    if(!$connection){
        echo 'Adatbázis kapcsolódási hiba: '.mysqli_connect_error();
    }else {
        $termekekQuery = "SELECT * FROM termekek";

        $termekekResult = mysqli_query($connection, $termekekQuery) or trigger_error(mysqli_error($connection));

        mysqli_close($connection);
    }


?>