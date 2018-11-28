// Initialisation
var indiceCourantQuestions = 0;

var questions = [ 'Question 1', 'Question 2' ];
var reponses  = [ ['Réponse 1.A', 'Réponse 1.B', 'Réponse 1.C', 'Réponse 1.D' ],
                  ['Réponse 2.A', 'Réponse 2.B', 'Réponse 2.C', 'Réponse 2.D' ] ];
var musiques = ['C:\\Users\\Martin Lesueur\\Desktop\\Devoir - LPRO\\Git\\blind test\\daniel_balavoine_lechanteur.mp3', 'C:\\Users\\Martin Lesueur\\Desktop\\Devoir - LPRO\\Git\\blind test\\orelsan_suicide_social.mp3'];

var questionElement = document.getElementById        ( 'question' );
var choixElements   = document.getElementsByClassName( 'choix'    );
var questionMusic = document.getElementById          ('music');
var blocAudio = document.getElementById ('bloc-audio');

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
    blocAudio.removeChild(blocAudio.childNodes[0]);

    var lecteurAudio =   '<audio controls>'
                       + '<source id="music" type="audio/mpeg"'
                       +  				'src="'+musiques[indiceCourantQuestions]+'"/>'
  	                   + '</audio>';
    //blocAudio.appendChild(lecteurAudio);
    console.log( blocAudio );
    blocAudio.innerHTML = lecteurAudio ;

    //questionMusic.setAttribute("src", musiques[indiceCourantQuestions]);
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
