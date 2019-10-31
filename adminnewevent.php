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
        <title>Bend CHE - Admin - Dodavanje novog nastupa</title>
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
                        <h2 class="text-center page-title dashboard-title">Dodavanje novog nastupa</h2>
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="list-group">
                                    <a href="adminevent.php" class="list-group-item list-group-item-action active">nastupi</a>
                                    <a href="adminreview.php" class="list-group-item list-group-item-action">komentari</a>                                    
                                </div>
                            </div>

                            <div class="col-lg-9 text-center">
                                <?php
                                    if (isset($_GET["msg"]) && $_GET["msg"] == 'update_failed') {
                                        echo "<div class='alert alert-danger' role='alert'>\n";
                                        echo "<span class='warning'><b>Greška!</b> Došlo je do greške prilikom ažuriranja, pokušajte ponovo.</span><br />\n";						
                                        echo "</div>\n";
                                    }                                                                    
                                ?>
                                <form action="php/addNewEvent.php" method="POST">
                                    <input id="event_id" type="hidden" name="event_id" value="<?php echo $res_event[0]->id; ?>" />
                                    <div class="form-group">
                                        <label for="venue_id" id="venue_label">lokal:</label>                                    
                                    </div>
                                    <select class="form-control" id="venue_id" name="venue_id">
                                        <option>- - -</option>
                                        <?php 
                                            require 'php/configuration.php';                                            
                                            $prep = $db->prepare("SELECT `venue`.`name`, `venue`.`id` FROM `venue`;");
                                            $prep->execute([]);
                                            $res_event = $prep->fetchAll(PDO::FETCH_OBJ);

                                            foreach($res_event as $event) {
                                                echo "<option value='" . $event->id . "'>" . $event->name . "</option>\n";
                                            }
                                        ?>
                                    </select>
                                    <br>
                                    <div class="form-group">
                                        <label for="description">opis:</label>
                                        <textarea id="description" class="form-control" rows="4" name="description" spellcheck="false" maxlength="120" required></textarea>
                                    </div>

                                    <div class="form-group">                                    
                                        <label for="date">datum:</label>
                                        <input type='date' name='date' class="form-control" id="modal_date" required/>
                                    </div>
                                    
                                    <br>
                                    <div class="form-group">
                                        <button class="btn" type="submit">Dodaj nov nastup</button>
                                    </div>
                                </form>  
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