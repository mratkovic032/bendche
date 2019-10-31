<?php 
    require 'configuration.php';

    $id = htmlspecialchars($_POST['event_id']);
    $date = htmlspecialchars($_POST['date']);
    $description = htmlspecialchars($_POST['description']);

    $prep = $db->prepare("UPDATE `event` SET `date` = ?, `description` = ? WHERE `id` = ?;");
    $prep->execute([$date, $description, $id]);    

    if ($prep->rowCount() > 0) {
        die(header('Location: ../adminevent.php?msg=successfully_updated_event'));    
    } else {
        die(header("Location: ../adminupdateevent.php?id=" . $id ."&msg=update_failed"));    
    }

?>