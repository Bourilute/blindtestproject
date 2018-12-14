<?php

//Connexion au serveur IUT
$serveur = 'localhost';
$bdd = 'blindtestproject';
$user = 'root';
$mdp = 'root';

try {
	$connexion = new PDO('mysql:host='.$serveur.';dbname='.$bdd, $user, $mdp);
	
}

catch(Exception $e) {
	die('ABORT MISSION !');
}

?>