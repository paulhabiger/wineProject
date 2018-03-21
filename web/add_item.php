<?php 
include('db_connect.php');

$add_new_query =
		"INSERT INTO `food` (`id`, `location`, `name`, `description`, `pairing`) VALUES (NULL, '" . 
		$_POST['location'] . "', '" . 
		$_POST['name'] . "', '" . 
		$_POST['description'] . "', '" . 
		$_POST['pairing'] . "')";
			
//echo $add_new_query;
mysql_query($add_new_query);

header('location: admin.php');
?>