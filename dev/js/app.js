// Initialisation
var indiceCourantQuestions = 0;

var questions = [ 'Question 1', 'Question 2' ];
var reponses  = [ ['Réponse 1.A', 'Réponse 1.B', 'Réponse 1.C', 'Réponse 1.D' ],
                  ['Réponse 2.A', 'Réponse 2.B', 'Réponse 2.C', 'Réponse 2.D' ] ];
var musiques  = ['assets/music/botw.mp3', 'assets/music/bd.mp3'];

var questionElement  = document.getElementById        ( 'question'  );
var choixElements    = document.getElementsByClassName( 'choix'     );
var blocAudioElement = document.getElementById        ( 'bloc-audio');


changementQuestion(); // On initialise la première question
window.addEventListener( 'load', initEvents, false );

function initEvents()
{
	for( var i = 0; i < choixElements.length; i++ )
	{
		choixElements[ i ].addEventListener( 'click', changementQuestion, false );
	}
}

function changementQuestion()
{
	console.log( "indiceCourantQuestions : " + indiceCourantQuestions );
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
		questionElement.innerHTML = 'Terminé !';

		for( var i = 0; i < choixElements.length; i++ )
			choixElements[ i ].innerHTML = '';
	}
}
