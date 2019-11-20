<?php
    include('./conn.php');

    $username=$_REQUEST['username'];
    $userpass=$_REQUEST['userpass'];
    //验证用户名
    $sql="select * from useroneplus where user_name='$username' AND user_pass='$userpass'";
    $result=$mysqli->query($sql);
    if($result->num_rows>0){
        echo '{"msg":"登录成功"}';
    }else{
        echo '{"msg":"请重新检查用户名和密码"}';
    }
    $mysqli->close();
?>