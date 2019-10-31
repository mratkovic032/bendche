<?php 
    session_start();
    require 'configuration.php';
    
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);    
    
    $prep = $db->prepare("SELECT * FROM `user` WHERE `username` = ? AND `password` = ? AND `is_active` = ?;");
    $prep->execute([$username, $password, '1']);
    $res = $prep->fetchAll(PDO::FETCH_OBJ);    
    
    if ($prep->rowCount() > 0) {                       
        $_SESSION['username'] = $res[0]->username;
        $_SESSION['id'] = $res[0]->id;
        die(header('Location: ../adminhome.php'));
    } else {
        die(header('Location: ../login.php?msg=incorrect_username'));
    }
?>