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
        <title>Bend CHE - Admin - Profil</title>
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
                        <h2 class="text-center page-title dashboard-title">Profil</h2>
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="list-group">
                                    <a href="adminevent.php" class="list-group-item list-group-item-action">nastupi</a>
                                    <a href="adminreview.php" class="list-group-item list-group-item-action">komentari</a>                                    
                                </div>
                            </div>

                            <div class="col-lg-9 text-center">
                                <?php
                                    if (isset($_GET["msg"]) && $_GET["msg"] == 'password_does_not_match') {
                                        echo "<div class='alert alert-danger' role='alert'>\n";
                                        echo "<span class='warning'><b>Greška!</b> Nova šifra i ponovljena nova šifra se ne slažu.</span><br />\n";						
                                        echo "</div>\n";
                                    }
                                    if (isset($_GET["msg"]) && $_GET["msg"] == 'successfully_updated_profile') {
                                        echo "<div class='alert alert-success' role='alert'>\n";
                                        echo "<span class='warning'><b>Uspešno!</b> Profil je ažuriran.</span><br />\n";						
                                        echo "</div>\n";
                                    }
                                ?>
                                <div>
                                    <form action="php/updateProfile.php" method="POST" id="updated_profile_form">
                                        <div class="form-group">
                                            <label for="username">korisničko ime:</label>
                                            <input type="text" class="form-control" id="username" name="username" required>
                                            <small class="d-none" id="error-username-login"></small>
                                        </div>
                                        <div class="form-group">
                                            <label for="password">trenutna šifra:</label>
                                            <input type="password" class="form-control" id="password" name="password" required>
                                            <small class="d-none" id="error-password-login"></small>
                                        </div>
                                        <div class="form-group">
                                            <label for="new_password">nova šifra:</label>
                                            <input type="password" class="form-control" id="new_password" name="new_password" required>
                                            <small class="d-none" id="error-password-login"></small>
                                        </div>
                                        <div class="form-group">
                                            <label for="new_password_repeat">nova šifra ponovo:</label>
                                            <input type="password" class="form-control" id="new_password_repeat" name="new_password_repeat" required>
                                            <small class="d-none" id="error-password-login"></small>
                                        </div>
                                        <br><br>
                                        <div class="text-center">
                                            <button id="button-submit" type="submit" class="btn btn-block" name="submit">promeni šifru</button>
                                        </div>
                                        <small class="d-success" id="success-profile-update"></small>
                                    </form>
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