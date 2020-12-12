<!-- PHP DATABASE MYSQL SYNC  -->
<!-- ROUTE THE ITEMS LINK TO THIS PAGE ------ yourpage.github.com/table.php -->


<html>
<body>
    <table>
        <tr>
            <th>Seller</th>
            <th>Item</th>
            <th>Price</th>
            <th>Seller Rating</th>
        </tr>
        <?php
        // CHANGE INFORMATION ON THIS LINE BELOW FOR YOUR USERNAME and PASSWORD
        $conn = mysqli_connect("locaclhost", "username", "password", "yardsale_db");
        $sql = "SELECT * FROM sellers";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while ($row = $result-> fetch_assoc()) {
                echo "<tr><td>" . $row["seller_name"] . "</td><td>" . $row["seller_item"] . "</td><td>" . $row["item_price"] . "</td><td>" . $row["seller_rating"] . "</td></tr>";
            }
        }
        else {
            echo "No Results";
        }
        $conn->close();
        ?>
    </table>
  </body>
</html>