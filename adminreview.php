<?php
    session_start(); 
    if (!isset($_SESSION['username'])) {
        header("Location:index.php");
        exit();
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Bend CHE - Admin - Komentari</title>
        <meta charset="utf-8">                
        <link rel="shortcut icon" href="assets/img/title_logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="assets/css/adminhome.css" rel="stylesheet" type="text/css"/>
        <link href="assets/css/responsive.css" rel="stylesheet" type="text/css"/>
        <link href="assets/libs/animate.css/animate.css" rel="stylesheet" type="text/css"/>
        <link href="assets/libs/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>        
        <link href="assets/libs/@fortawesome/fontawesome-free/css/all.css" rel="stylesheet" />
    </head>

    <body id="myPage" data-spy="scroll" data-target=".navbar">
        		     
        <div>
            <main>				                
                <nav class="navbar navbar-inverse navbar-fixed-top">
                    <div class="container">
                        <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="">BendChe</a>
                        </div>
                        <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav">
                            <li><a href="index.php">idi na početnu</a></li>                                            
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="adminprofile.php"><?php echo $_SESSION['username']; ?></a></li>
                            <li><a href="php/logoutUser.php">odjavi se</a></li>                        
                        </ul>
                        </div><!--/.nav-collapse -->
                    </div>
                </nav>

                <div id="main-content-wrapper">
                    <div class="container">
                        <h2 class="text-center page-title dashboard-title">Komentari</h2>
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="list-group">
                                    <a href="adminevent.php" class="list-group-item list-group-item-action">nastupi</a>
                                    <a href="adminreview.php" class="list-group-item list-group-item-action active">komentari</a>                                    
                                </div>
                            </div>

                            <div class="col-lg-9 text-center">
                                <div>
                                    <div class="events table-responsive">
                                        <?php
                                            if (isset($_GET["msg"]) && $_GET["msg"] == 'successfully_deleted_review') {
                                                echo "<div class='alert alert-success' role='alert'>\n";
                                                echo "<span class='warning'><b>Uspešno!</b> Komentar je obrisan.</span><br />\n";						
                                                echo "</div>\n";
                                            }
                                        ?>	
                                        <table clas="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>ime i prezime</th>
                                                    <th>ocena</th>
                                                    <th>komentar</th>                                                    
                                                    <th>opcija</th>                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php
                                                    require 'php/configuration.php';
                                                    $prep_review = $db->prepare("SELECT * FROM `review` WHERE `is_active` = 1 ORDER BY `created_at` DESC LIMIT 6;");
                                                    $prep_review->execute();
                                                    $res_review = $prep_review->fetchAll(PDO::FETCH_OBJ);

                                                    foreach($res_review as $review) {
                                                        echo "<tr>\n";
                                                            echo "<td>" . $review->username . "</td>\n";
                                                            echo "<td>" . $review->rating . "</td>\n";                                                            
                                                            echo "<td>" . $review->message . "</td>\n";
                                                            echo "<td><a href='php/deleteReview.php?id=" . $review->id . "'>obriši</a></td>\n";                                                            
                                                        echo "</tr>\n";
                                                    }
                                                ?>                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>		
        
        <script src="assets/libs/jquery/dist/jquery.min.js" type="text/javascript"></script>
        <script src="assets/libs/popper.js/dist/umd/popper.min.js" type="text/javascript"></script>
        <script src="assets/libs/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>        
        <script src="assets/libs/wow.js/dist/wow.js" type="text/javascript"></script>				
    </body>
</html>