<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wyniki Quizu</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <main class="teacher__delete">
    <h1>Wyniki Quizu</h1>
    <table border="1" cellspacing="2" cellpadding="2">
        <tr>
            <th class="teacher__delete--th">Nazwa</th>
            <th class="teacher__delete--th">Wynik</th>
            <th class="teacher__delete--th">Czas</th>
        </tr>
        <?php
        require('polaczenie.php');

        $query = "SELECT nazwa, wynik, czas FROM uczen ORDER BY 2 DESC"; 

        if ($result = $conn->query($query)) {
            while ($row = $result->fetch_assoc()) {
                echo '<tr>';
                echo '<td>' . $row["nazwa"] . '</td>';
                echo '<td>' . $row["wynik"]. "/20"  . '</td>';
                echo '<td>' . $row["czas"] . '</td>';
                echo '</tr>';
            }
            $result->free();
        }
        ?>
    </table>
    <form method="post">
    <input type="hidden" name="deleteAll" value="1">
    <input type="submit" value="Usuń wszystkie rekordy" class="teacher__delete--button">
    <?php
    if (isset($_POST['deleteAll'])) {
        require('polaczenie.php');

        $query = "DELETE FROM uczen"; 

        if ($conn->query($query) === TRUE) {
            echo "Wszystkie rekordy usunięte pomyślnie!";
        } else {
            echo "Nie udało się usunąć :(" . $conn->error;
        }

        $conn->close();
        exit;
}
?>

</form>
</main>
    
</body>
</html>
