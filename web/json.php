<?php
include "query.php";
$data=array();
$q=mysql_query("select * from `products`");
while ($row=mysql_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);
?>