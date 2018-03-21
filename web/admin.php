<?php

include('db_connect.php');

?>
<html>
<head>
	<title>Admin Home</title>
</head>

<body>

<p><a href="food.php">UPDATE</a></p>

<form action="add_item.php" method="post">
Name: <input type="text" name="name" />
Location: <select name="location" />
			<option value="market">Market</option>
			<option value="restaurant">Restaurant</option>
		</select>
Description: <input type="text" name="description" />
Pairing: <input type="text" name="pairing" />
<input type="submit" value="Add New Item">
</form>


<?php 

$query = "SELECT * FROM food";
$result = mysql_query($query);

while($row = mysql_fetch_array($result)){
	echo "<p><a href='remove_item.php?id=" . $row['id'] . "'>DELETE</a> : " . $row['name'] . " - " . $row['location'] . "</p>";
}
?>

</body>
</html>