<?php

include('db_connect.php');

$data_market = array();

$update_market = mysql_query("SELECT * FROM `food` WHERE location = 'market'");
while ($row = mysql_fetch_object($update_market)){
	$data_market[] = $row;
}
$fp = fopen('market.json', 'w');
fwrite($fp, json_encode($data_market));
fclose($fp);

//echo json_encode($data_market);

$data_restaurant = array();

$update_restaurant = mysql_query("SELECT * FROM `food` WHERE location = 'restaurant'");
while ($row = mysql_fetch_object($update_restaurant)){
	$data_restaurant[] = $row;
}


//echo json_encode($data_restaurant);
$fp = fopen('restaurant.json', 'w');
fwrite($fp, json_encode($data_restaurant));
fclose($fp);

header('location: admin.php');

?>