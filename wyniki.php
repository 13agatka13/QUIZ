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

    <!-- Tabela dla zwierząt -->
    <h2 class="teacher__delete--title">ZWIERZĘTA</h2>
    <table border="1" cellspacing="2" cellpadding="2">
        <tr>
            <th class="teacher__delete--th">Nazwa</th>
            <th class="teacher__delete--th">Wynik</th>
            <th class="teacher__delete--th">Czas</th>
        </tr>
        <?php
        require('polaczenie.php');

        $query = "SELECT nazwa, wynik, czas FROM animals ORDER BY 2 DESC"; 

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
        <input type="hidden" name="deleteAnimals" value="1">
        <input type="submit" value="Usuń rekordy zwierząt" class="teacher__delete--button">
    </form>

    <!-- Tabela dla miejsc -->
    <h2 class="teacher__delete--title">MIEJSCA</h2>
    <table border="1" cellspacing="2" cellpadding="2">
        <tr>
            <th class="teacher__delete--th">Nazwa</th>
            <th class="teacher__delete--th">Wynik</th>
            <th class="teacher__delete--th">Czas</th>
        </tr>
        <?php
        require('polaczenie.php');

        $query = "SELECT nazwa, wynik, czas FROM places ORDER BY 2 DESC"; 

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
        <input type="hidden" name="deletePlaces" value="1">
        <input type="submit" value="Usuń rekordy miejsc" class="teacher__delete--button">
    </form>

 

      <!-- Tabela dla owocow -->
      <h2 class="teacher__delete--title">OWOCE</h2>
    <table border="1" cellspacing="2" cellpadding="2">
        <tr>
            <th class="teacher__delete--th">Nazwa</th>
            <th class="teacher__delete--th">Wynik</th>
            <th class="teacher__delete--th">Czas</th>
        </tr>
        <?php
        require('polaczenie.php');

        $query = "SELECT nazwa, wynik, czas FROM fruits ORDER BY 2 DESC"; 

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
        <input type="hidden" name="deleteFruits" value="1">
        <input type="submit" value="Usuń rekordy owoców" class="teacher__delete--button">
    </form>

    
      <!-- Tabela dla ubran -->
      <h2 class="teacher__delete--title">UBRANIA</h2>
    <table border="1" cellspacing="2" cellpadding="2">
        <tr>
            <th class="teacher__delete--th">Nazwa</th>
            <th class="teacher__delete--th">Wynik</th>
            <th class="teacher__delete--th">Czas</th>
        </tr>
        <?php
        require('polaczenie.php');

        $query = "SELECT nazwa, wynik, czas FROM clothes ORDER BY 2 DESC"; 

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
        <input type="hidden" name="deleteFruits" value="1">
        <input type="submit" value="Usuń rekordy owoców" class="teacher__delete--button">
    </form>


     <!-- Tabela dla warzywa -->
     <h2 class="teacher__delete--title">Warzywa</h2>
    <table border="1" cellspacing="2" cellpadding="2">
        <tr>
            <th class="teacher__delete--th">Nazwa</th>
            <th class="teacher__delete--th">Wynik</th>
            <th class="teacher__delete--th">Czas</th>
        </tr>
        <?php
        require('polaczenie.php');

        $query = "SELECT nazwa, wynik, czas FROM vegetables ORDER BY 2 DESC"; 

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
        <input type="hidden" name="deleteVegetables" value="1">
        <input type="submit" value="Usuń rekordy warzyw" class="teacher__delete--button">
    </form>

    </main>
    
    <?php
    if (isset($_POST['deleteAnimals'])) {
        require('polaczenie.php');

        $query = "DELETE FROM animals"; 

        if ($conn->query($query) === TRUE) {
            echo "Wszystkie rekordy zwierząt zostały pomyślnie usunięte!";
        } else {
            echo "Nie udało się usunąć rekordów zwierząt: " . $conn->error;
        }

        $conn->close();
        exit;
    }
    ?>
     <?php
    if (isset($_POST['deletePlaces'])) {
        require('polaczenie.php');

        $query = "DELETE FROM places"; 

        if ($conn->query($query) === TRUE) {
            echo "Wszystkie rekordy zwierząt zostały pomyślnie usunięte!";
        } else {
            echo "Nie udało się usunąć rekordów zwierząt: " . $conn->error;
        }

        $conn->close();
        exit;
    }
    ?>
     <?php
    if (isset($_POST['deleteFruits'])) {
        require('polaczenie.php');

        $query = "DELETE FROM fruits"; 

        if ($conn->query($query) === TRUE) {
            echo "Wszystkie rekordy zwierząt zostały pomyślnie usunięte!";
        } else {
            echo "Nie udało się usunąć rekordów zwierząt: " . $conn->error;
        }

        $conn->close();
        exit;
    }
    ?>
     <?php
    if (isset($_POST['deleteClothes'])) {
        require('polaczenie.php');

        $query = "DELETE FROM clothes"; 

        if ($conn->query($query) === TRUE) {
            echo "Wszystkie rekordy zwierząt zostały pomyślnie usunięte!";
        } else {
            echo "Nie udało się usunąć rekordów zwierząt: " . $conn->error;
        }

        $conn->close();
        exit;
    }
    ?>
     <?php
    if (isset($_POST['deleteVegetables'])) {
        require('polaczenie.php');

        $query = "DELETE FROM vegetables"; 

        if ($conn->query($query) === TRUE) {
            echo "Wszystkie rekordy zwierząt zostały pomyślnie usunięte!";
        } else {
            echo "Nie udało się usunąć rekordów zwierząt: " . $conn->error;
        }

        $conn->close();
        exit;
    }
    ?>


</body>
</html>
