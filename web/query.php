<?php
 header("Access-Control-Allow-Origin: *");
 mysql_connect("localhost","root","");
 $conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

mysql_select_db("localedb");
?>