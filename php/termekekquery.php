<?php
    include("connect.php");

    if(!isset($_SERVER['HTTP_REFERER'])) {
        header('location:../index.html');
        exit;
    }

    if(!$connection){
        echo "Adatbázis kapcsolódási hiba: ".mysqli_connect_error();
    }else {
        $termekekQuery = "SELECT * FROM termekek";

        $termekekResult = mysqli_query($connection, $termekekQuery) or trigger_error(mysqli_error($connection));

        echo "
            <table id='termekekTable'>
            <thead>
            <tr>
            <th>Id</th>
            <th>Terméknév</th>
            <th>Szín</th>
            <th>Minta</th>
            <th>Raktáron</th>
            </tr>
            </thead>
            <tbody>";

        while($r = mysqli_fetch_array($termekekResult, MYSQLI_ASSOC)) {
            echo "
                <tr>
                <td>" .$r['id']."</td>
                <td>" .$r['nev']."</td>
                <td>" .$r['szin']."</td>
                <td>" .$r['minta']."</td>
                <td>" .$r['raktaron']."</td>
                </tr>
            ";
        }

        echo "</tbody></table>";

        mysqli_close($connection);
    }


?>