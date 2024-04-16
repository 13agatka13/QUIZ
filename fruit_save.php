<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nazwa = $_POST['nazwa'];
    $wynik = $_POST['wynik'];
    $czas = $_POST['czas'];

    require('polaczenie.php');

    if ($conn->connect_error) {
        die("Błąd połączenia: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO fruits (nazwa, wynik, czas) VALUES (?, ?, ?)");
    $stmt->bind_param("sis", $nazwa, $wynik, $czas);

    $stmt->execute();
    $stmt->close();
    $conn->close();

}
?>