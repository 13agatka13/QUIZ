<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "wyniki";
$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Błąd połączenia: " . $conn->connect_error);
}
?>