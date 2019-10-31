<?php 
    session_start();
    require 'configuration.php';
    
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);
    $password1 = filter_input(INPUT_POST, 'new_password', FILTER_SANITIZE_STRING);
    $password2 = filter_input(INPUT_POST, 'new_password_repeat', FILTER_SANITIZE_STRING);    
    
    if ($password1 != $password2) {
        die(header('Location: ../adminprofile.php?msg=password_does_not_match'));
    }

    $prep = $db->prepare("SELECT * FROM `user` WHERE `username` = ? AND `password` = ? AND `is_active` = ?");
    $prep->execute([$_SESSION['username'], $password, '1']);
    
    if ($prep->rowCount() > 0) {                

        $prep_insert = $db->prepare("UPDATE `user` SET `username` = ?, `password` = ? WHERE `id` = ?;");
        $prep_insert->execute([$username, $password1, $_SESSION['id']]);

        if ($prep_insert->rowCount() > 0) {
            $_SESSION['username'] = $username;
        }

        die(header('Location: ../adminprofile.php?msg=successfully_updated_profile'));
    }
?>