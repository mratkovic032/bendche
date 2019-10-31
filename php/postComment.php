<?php     
    require 'configuration.php';

    $username = htmlspecialchars($_POST['name_surname']);
    $comment = htmlspecialchars($_POST['comment_textbox']);
    $rating = $_POST['rating'];    
    
    $prep_insert = $db->prepare("INSERT INTO `review` (`username`, `message`, `rating`) VALUES (?, ?, ?);");
    $prep_insert->execute([$username, $comment, $rating]);

    if ($prep_insert->rowCount() > 0) {
        //echo "<b>Uspešno ste objavili komentar!</b>";

        echo "<div class='col-lg-4 col-md-6 testimonialDiv'>\n";
            echo "<div class='testimonial-box wow fadeIn' data-wow-delay='.4s'>\n";
            echo "<div class='quote'><i class='fas fa-quote-right'></i></div>\n";
            echo "<div class='testimonial-comment'>" . $comment . "</div>\n";
            echo "<div class='testimonial-footer'>\n";
                echo "<span class='username'>" . $username . "</span><br>\n";
                $maxRating = 5;
                $userRating = $rating;
                $ratingDifference = $maxRating - $userRating;
                for ($j = 1; $j <= $userRating; $j++) {
                    echo "<span class='fa fa-star checked'></span>\n";
                }
                for ($k = 1; $k <= $ratingDifference; $k++) {
                    echo "<span class='fa fa-star'></span>\n";
                }
                echo "</div>\n";
            echo "</div>\n";
        echo "</div>\n";
    }
?>