<?php
    include('./conn.php');
    //接收数据
    $username=$_REQUEST['username'];
    $password=$_REQUEST['password'];
    // $phone=$_REQUEST['phone'];
    //验证数据
    $sql = "select * from useroneplus where user_name='$username'";
    $result = $mysqli->query($sql);

    if($result->num_rows>0){
        echo '{"msg":"用户名已存在"}';
        $mysqli->close();
        die;
    }
    //插入数据
    $insertSql="insert into useroneplus(user_name,user_pass) values ('$username','$password')";
    $res=$mysqli->query($insertSql);
    if($res){
        echo '{"msg":"注册成功"}';
    }
    $mysqli->close();
?>