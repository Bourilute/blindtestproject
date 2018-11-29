<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />

	<title>Quiz</title>

	<link rel="stylesheet" href="css/style.css" type="text/css" />
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
</head>
<body>
	<main class="quizz">
		<header>
			<h1><a href="index.php">Blinquizz!</a></h1>
			<a href="#"><img src="assets/images/avatar.png" alt="Mon compte" class="avatar"></a>
		</header>

		<div id="player" class="player">
			<div id="bloc-audio"></div>

			<i class="fas fa-volume-up fa-4x"></i>
			<div>
				<progress id="seekbar" value="0" max="1"></progress>
			</div>
		</div>

		<section>
			<p id="question" class="question">Prêt?</p>

			<div class="reponses">
				<div id="1" class="choix"><p> </p></div>
				<div id="2" class="choix"><p> </p></div>
				<div id="3" class="choix"><p> </p></div>
				<div id="4" class="choix"><p> </p></div>
			</div>
		</section>

		<footer>
			<p>Mentions légales</p>
		</footer>
	</main>
	<script type="text/javascript" src="js/app.js"></script>
</body>
</html>
