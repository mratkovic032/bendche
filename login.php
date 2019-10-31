<?php
    session_start(); 
    if (isset($_SESSION['username'])) {
        header("Location:adminhome.php");
        exit();
    }
?>	
<!DOCTYPE html>
<html>
    <head>
        <title>Bend CHE - Login</title>
        <meta charset="utf-8">                
        <link rel="shortcut icon" href="assets/img/title_logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="assets/css/login.css" rel="stylesheet" type="text/css"/>
        <link href="assets/css/responsive.css" rel="stylesheet" type="text/css"/>
        <link href="assets/libs/animate.css/animate.css" rel="stylesheet" type="text/css"/>
        <link href="assets/libs/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>        
        <link href="assets/libs/@fortawesome/fontawesome-free/css/all.css" rel="stylesheet" />
    </head>

    <body id="myPage" data-spy="scroll" data-target=".navbar">		     
        <div>
            <main>
                <div class="container">
					<div class="row">
						<div id="main-content-wrapper" class="col-lg-6 col-lg-offset-3">
							<?php						
								if (isset($_GET["msg"]) && $_GET["msg"] == 'incorrect_username') {
									echo "<div class='alert alert-danger' role='alert'>\n";
									echo "<span class='warning'><b>Greška!</b> Ne postoji korisničko ime.</span><br />\n";						
									echo "</div>\n";
								}
								if (isset($_GET["msg"]) && $_GET["msg"] == 'incorrect_password') {
									echo "<div class='alert alert-danger' role='alert'>\n";
									echo "<span class='warning'><b>Greška!</b> Pogrešna šifra.</span><br />\n";						
									echo "</div>\n";
								}
							?>				                
							<form action="php/loginUser.php" method="POST" id="login_form">
								<div class="form-group">
									<label for="username">korisničko ime</label>
									<input type="text" class="form-control" id="username" name="username" required>
									<small class="d-none" id="error-username-login"></small>
								</div>
								<div class="form-group">
									<label for="password">šifra</label>
									<input type="password" class="form-control" id="password" name="password" required>
									<small class="d-none" id="error-password-login"></small>
								</div>
								<br><br>
								<div class="text-center">
									<button id="button-submit" type="submit" class="btn btn-default btn-block" name="submit">prijavi se</button>
								</div>
								<small class="d-success" id="success-contact-sent"></small>
							</form>
						</div>
					</div>
                </div>	

            </main>
        </div>		
        
        <script src="assets/libs/jquery/dist/jquery.min.js" type="text/javascript"></script>
        <script src="assets/libs/popper.js/dist/umd/popper.min.js" type="text/javascript"></script>
        <script src="assets/libs/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>        
        <script src="assets/libs/wow.js/dist/wow.js" type="text/javascript"></script>
		
		
		<script>			
			$("#login_form").on("submit", function(e) {
				//e.preventDefault();
				console.log('usao u submit');				
				
				var errorUsername = $('#error-username-login');
				errorUsername.html('');
				var username = $('#username').val();
				if (!username.match(/^[A-Za-z0-9]+$/)) {
					errorUsername.html('Korisničko ime može sadržati samo mala, velika slova i brojeve bez razmaka.');
					return false;
					console.log('Username does not match the pattern');
				}

				var errorPassword = $('#error-password-login');
				errorPassword.html('');
				var password = $('#password').val();
				if (!password.match(/^[A-Za-z0-9]+$/)) {
					errorPassword.html('Šifra može sadržati samo mala, velika slova i brojeve bez razmaka.')
					return false;
					console.log('Password does not match the pattern');
				}							
			});
		</script>		
    </body>
</html>