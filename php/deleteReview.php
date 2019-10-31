<?php 
    require 'configuration.php';

    $id = htmlspecialchars($_GET['id']);
    $prep = $db->prepare("UPDATE `review` SET `is_active` = ? WHERE `id` = ?;");
    $prep->execute([0, $id]);

    if ($prep->rowCount() > 0) {
        die(header('Location: ../adminreview.php?msg=successfully_deleted_review'));
    }

?>