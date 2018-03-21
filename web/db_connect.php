<?php
$con = mysql_connect('localhost', 'root', '') or die(mysql_error()); 
mysql_select_db('localedb', $con) or die(mysql_error());
?>
