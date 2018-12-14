<?php
session_start();

require_once('config/connexion.php');

if (!empty($_POST)) { 
	$sql_add = "INSERT INTO utilisateurs (`u_pseudo`,`u_mail`, `u_mdp`) VALUES ('".$_POST['login']."','".$_POST['mail']."','".$_POST['mdp']."')";

    $resultats_add = $connexion->query($sql_add);

	if($connexion->exec($sql_user)) {
		$msg_ajout = "user ajoutée";
	}
	else {
		$msg_ajout = "Erreur lors de l'ajout";
	}
	header('location:index.php?msg_ajout='.$msg_ajout);
	exit(); //on arrête le code php vu que l'on quitte la page
}

?>
<!DOCTYPE HTML>
<html>
<head>
        <title>Bindquizz - Création d'un compte</title>
        <meta charset="utf-8">
</head>
<body>
<br>
<br>
<fieldset>
	<legend>Formulaire d'ajout</legend>
	<form method="post">
		<input type="hidden" name="id" value="" />
		<p>
			Login : <input type="text" name="login" value="" />
		</p>
		<p>
			Adresse Mail : <input type="text" name="mail" value="" />
		</p>
		<p>
			MDP : <input type="text" name="mdp" value="" />
		</p>
		<p>
			<input type="submit" value="Ajouter" />
		</p>
	</form>
</fieldset>		 
</body>
</html>
