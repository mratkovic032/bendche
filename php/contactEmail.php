<?php 
    
    $to = 'dowsha032@gmail.com';
    $name_surname = htmlspecialchars($_POST['name_surname']);
    $phone = htmlspecialchars($_POST['phone']);
    $from = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    if (mail($to, "BendChe - Kontakt forma", "Kontaktirao Vas je:\r\nIme i prezime: " . $name_surname . "\r\nTelefon: " . $phone . "\r\nE-mail: " . $from . "\r\nPoruka: " . $message . "\r\n")) {
        echo "Vaša poruka je uspešno poslata!";
    } else {
        echo "Došlo je do greške, pokušajte ponovo.";
    }
?>