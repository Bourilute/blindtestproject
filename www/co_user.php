<?php
session_start();

require_once('config/connexion.php'); //à partir de là notre variable 

if (!empty($_POST)) {
	$sql_login = "SELECT * FROM utilisateurs WHERE u_pseudo = '".$_POST['login']."' AND u_mdp='".$_POST['mdp']."'";

	$resultat_login = $connexion->query($sql_login);
	$user = $resultat_login->fetch(PDO::FETCH_OBJ);

	if (!empty($user->u_pseudo)) {
		$msg_ajout = 'Connexion';
		$_SESSION['logged'] = true;
		header('location:co_user.php?msg_session='.$msg_ajout);
		exit();
	}
	else {
		$msg_login = 'Erreur de connexion';
		$_SESSION['logged'] = false;
	}
	
}

?>
<!DOCTYPE HTML>
<html>
	<head>
		<title>Connexion au Back-office</title>
		<meta charset="utf-8">
	</head>

	<body>
	<?php
	if(!empty($msg_login)) {
		echo '<p>'.$msg_login.'</p>';
	}

	if(!empty($_GET['msg_session'])) {
		echo '<p>'.$_GET['msg_session'].'</p>';
	}
	?>
		<fieldset>
			<legend>Formulaire de connexion</legend>
			<form method="post">
				<p>
					Login : <input type="text" name="login"/>
				</p>
				<p>
					Mot de passe : <input type="password" name="mdp"/>
				</p>
				<p>
					<input type="submit" value="Connexion" />
				</p>
			</form>
		</fieldset>		 
	</body>
</html>
