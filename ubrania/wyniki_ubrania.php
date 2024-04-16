<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wyniki</title>
    <link rel="stylesheet" href="../styl.css" />
</head>
<body>
    <div class="results_table">
        <h3>Wyniki uczniów</h3>
        <table border="1" cellspacing="2" cellpadding="2" class="php_table">
        <tr>
            <th>Nazwa</th>
            <th>Wynik</th>
            <th>Czas</th>
        </tr>
        <?php
        require('../polaczenie.php');

        $query = "SELECT nazwa, wynik, czas FROM clothes ORDER BY 2 DESC"; 

        if ($result = $conn->query($query)) {
            while ($row = $result->fetch_assoc()) {
                echo '<tr>';
                echo '<td>' . $row["nazwa"] . '</td>';
                echo '<td>' . $row["wynik"]. "/20" . '</td>';
                echo '<td>' . $row["czas"] . '</td>';
                echo '</tr>';
            }
            $result->free();
        }
        ?>
        </table>
    </div>
</body>
</html>