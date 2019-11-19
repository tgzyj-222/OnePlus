<?php
    include('./conn.php');

    $id = $_REQUEST['id'];

    $sql = "select * from product where id='$id'";

    $res = $mysqli->query($sql);
// echo(res);
// die;
    $row = $res->fetch_assoc();

    $json = json_encode($row);

    echo $json;

    $mysqli->close();

?>