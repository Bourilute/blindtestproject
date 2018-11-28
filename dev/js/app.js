//@prepros-prepend vendor/jquery/jquery-3.3.1.min.js


// Initialisation
var indiceCourantQuestions = 0;

var questions = [ 'Question 1', 'Question 2' ];
var reponses  = [ ['Réponse 1.A', 'Réponse 1.B', 'Réponse 1.C', 'Réponse 1.D' ],
                  ['Réponse 2.A', 'Réponse 2.B', 'Réponse 2.C', 'Réponse 2.D' ] ];
var musiques = ['assets/music/botw.mp3', 'assets/music/bd.mp3'];

var questionElement = document.getElementById        ( 'question'  );
var choixElements   = document.getElementsByClassName( 'choix'     );
var questionMusic   = document.getElementById        ( 'music'     );
var blocAudio       = document.getElementById        ( 'bloc-audio');
//var blocControles   = document.


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
	if( questions.length > indiceCourantQuestions )
	{
	    var lecteurAudio =   '<audio id="test" src="' + musiques[ indiceCourantQuestions ] + '" autoplay></audio>';
/*
	  	var controlleurAudio =   '<a class="controls" id="play-button" style="cursor:pointer;"><i class="fas fa-pause fa-2x"></i></a>'
	  	                       + '<a class="controls" id="stop-button" style="cursor:pointer;"><i class="fas fa-stop fa-2x"></i></a>'
                               + '<a class="controls" id="pause-button" style="cursor:pointer;"><i class="fas fa-play fa-2x"></i></a>';
*/
	    blocAudio.innerHTML = lecteurAudio;

	    var ply = document.getElementById('test');
		var dur = document.getElementById('test').duration;

		$('#test').on('timeupdate', function() {
	    	$('#seekbar').attr("value", this.currentTime / this.duration);
		});

		questionElement.innerHTML = questions[ indiceCourantQuestions ];

		for( var i = 0; i < choixElements.length; i++ )
			choixElements[ i ].innerHTML = reponses[ indiceCourantQuestions ][ i ];

		indiceCourantQuestions++;
	}
	else
	{
    	questionMusic.innerHTML = '';
		questionElement.innerHTML = 'Terminé !';

		for( var i = 0; i < choixElements.length; i++ )
			choixElements[ i ].innerHTML = '';
	}
}
