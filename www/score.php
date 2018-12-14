<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>Leaderboard</title>
	<link rel="stylesheet" href="css/style.css" type="text/css" />
	<style>
		section{
			text-align: center;
			font-family:"Montserrat Regular";
		}

		.leader{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			color: white;
		}

		table {
		  font-family: arial, sans-serif;
		  border-collapse: collapse;
		  width: 100%;
		}

		td, th {
		  border: 2px solid white;
		  text-align: left;
		  padding: 8px;
		}

		tr:nth-child(even) {
		  background-color: #D93C9C;
		}
	</style>
</head>
<body>
	<main class="leader">
		<header>
			<h1><a href="index.php">Blinquizz - Leaderboard</a></h1>
			<a href="#"><img src="assets/images/avatar.png" alt="Mon compte" class="avatar"></a>
		</header>

		<section>
			<h1>LEARDERBOARD</h1>
			<h2>Nom de la playlist</h2>

			<div class="tableau">
				<table>
					<tr>
						<th>Score</th>
					    <th>Utilisateur</th>
					</tr>
					<tr>
					    <td>5000</td>
					    <td>Maria Anders</td>
					</tr>
					<tr>
					    <td>4000</td>
					    <td>Maria Anders</td>
					</tr>
					<tr>
					    <td>3000</td>
					    <td>Maria Anders</td>
					</tr>
					<tr>
					    <td>2000</td>
					    <td>Maria Anders</td>
					</tr>
					<tr>
					    <td>1000</td>
					    <td>Maria Anders</td>
					</tr>
					<tr>
					    <td>900</td>
					    <td>Maria Anders</td>
					</tr>
					<tr>
					    <td>800</td>
					    <td>Maria Anders</td>
					</tr>
					<tr>
					    <td>700</td>
					    <td>Maria Anders</td>
					</tr>
					<tr>
					    <td>600</td>
					    <td>Maria Anders</td>
					</tr>
					<tr>
					    <td>500</td>
					    <td>Maria Anders</td>
					</tr>
				</table>
			</div>
		</section>

		<footer>
			<a href="mention.html"><p>Mentions légales</p></a>
		</footer>
	</main>
</body>
</html>