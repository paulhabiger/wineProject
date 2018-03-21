<?php 

include('db_connect.php');

$remove_item_query = "DELETE FROM `food` WHERE id = '" . $_GET['id'] . "'";

//echo $remove_item_query;
mysql_query($remove_item_query);
header('location: admin.php');

?>