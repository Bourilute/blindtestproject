// Initialisation
var indiceCourantQuestions = 0;
var totalPoints            = 0;

// Questions, reponses et musiques de la playlist
var questions = [ 'Question 1', 'Question 2' ];
var reponses  = [ ['Réponse 1.A', 'Réponse 1.B', 'Réponse 1.C', 'Réponse 1.D' ],
                  ['Réponse 2.A', 'Réponse 2.B', 'Réponse 2.C', 'Réponse 2.D' ] ];
var score     = [ [1            , 0            , 0            , 0             ],
                  [0            , 0            , 1            , 0             ] ];
var musiques  = ['assets/music/botw.mp3', 'assets/music/bd.mp3'];

// Blocs HTML a modifier tout au long du jeu
var questionElement  = document.getElementById        ( 'question'  );
var choixElements    = document.getElementsByClassName( 'choix'     );
var playerAudio      = document.getElementById        ( 'player'    );
var blocAudioElement = document.getElementById        ( 'bloc-audio');

// Evenements
window.addEventListener( 'load', initEvents, false );

function initEvents()
{
	playerAudio.style.display = "none";

	for( var i = 0; i < choixElements.length; i++ )
	{
		choixElements[ i ].style.display = "none";
		choixElements[ i ].addEventListener( 'click', changementQuestion, false );
	}

	decompte();
}

function decompte()
{
	// Decompte avant debut du jeu
	var secondes = 5;
	questionElement.innerHTML = secondes;

	// Debut du decompte
	var decompte = window.setInterval( function() 
	{
		questionElement.innerHTML = --secondes;
	}, 1000 );

	// A la fin du decompte on lance le jeu
	window.setTimeout( function()
	{

		window.clearInterval( decompte );

		playerAudio.style.display = "flex";

		for( var i = 0; i < choixElements.length; i++ )
			choixElements[ i ].style.display = "flex";

		changementQuestion()
	}, secondes * 1000 );
}

// Quand le joueur clique sur une reponse, cette fonction est appelee
// Elle actualise la musique, la question et les reponses
// Quand la derniere question a ete repondue, elle met fin au jeu
function changementQuestion( event )
{
	actualiserScore( event );

	// S'il y a encore des questions
	if( questions.length > indiceCourantQuestions )
	{
		// On cree notre lecteur audio pour actualiser la musique
	    var lecteurAudio =   '<audio id="lecteur-audio" src="' + musiques[ indiceCourantQuestions ] + '" autoplay></audio>';

	    blocAudioElement.innerHTML = lecteurAudio;

	    // On recupere le bloc audio precedemment cree
	    var ply = document.getElementById('lecteur-audio');
		var dur = document.getElementById('lecteur-audio').duration;

		// Quand la musique progresse, on remplit la progress bar
		ply.addEventListener( 'timeupdate', function()
		{
			document.getElementById( 'seekbar' ).setAttribute( "value", this.currentTime / this.duration );
		});

		// Actualisation de la question et des reponses
		questionElement.innerHTML = questions[ indiceCourantQuestions ];

		for( var i = 0; i < choixElements.length; i++ )
			choixElements[ i ].innerHTML = reponses[ indiceCourantQuestions ][ i ];

		indiceCourantQuestions++;
	}
	else
	{
		// Plus de question? Alors on affiche un message de fin
    	blocAudioElement.innerHTML = "";
		questionElement.innerHTML = 'Terminé ! Vous avez obtenu ' + totalPoints + '/' + questions.length;

		for( var i = 0; i < choixElements.length; i++ )
		{
			choixElements[ i ].innerHTML = '';
			choixElements[ i ].style.display = 'none';
		}

		playerAudio.style.display = 'none';
	}
}

function actualiserScore( event )
{
	if( indiceCourantQuestions != 0 )
	{
		var indice = 0;
		for( var i = 0; i < reponses[ indiceCourantQuestions-1 ].length; i++ )
		{
			if( reponses[ indiceCourantQuestions-1 ][ i ] == event.explicitOriginalTarget.data )
				indice = i; console.log( "trouvé !" );
		}

		totalPoints += score[ indiceCourantQuestions-1 ][ indice ];
	}
}
