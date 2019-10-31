<?php     
    require 'configuration.php';

    $id = htmlspecialchars($_POST['venue_id']);
    $date = htmlspecialchars($_POST['date']);
    $description = htmlspecialchars($_POST['description']);    
    
    $prep_insert = $db->prepare("INSERT INTO `event` (`venue_id`, `description`, `date`) VALUES (?, ?, ?);");
    $prep_insert->execute([$id, $description, $date]);

    if ($prep_insert->rowCount() > 0) {
        //echo "<b>Uspešno ste objavili komentar!</b>";
        die(header('Location: ../adminevent.php?msg=successfully_added_event'));
    }
?>