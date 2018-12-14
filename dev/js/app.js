// Initialisation
var indiceCourantQuestions = 0;
var totalPoints            = 0;

// Questions, reponses et musiques de la playlist
var questions = [ 'En quelle année est sortie cette chanson?', 'Quel est le nom de cette chanson sortie en 2015?','Qui est le chanteur de cette chanson sortie en 1978?', 'Quel est le groupe qui a chanté cette chanson sortie en 1977?', 'Quel est le nom de cette chanson sortie en 2011?' ];
var reponses  = [ ['2015', '2008', '2013', '2017' ],
                  ['Wiz Khalifa', 'See you again', 'Fast and Furious 7 song', 'See me again' ],
                  ['Jacques Brel', 'Patrick Bruel', 'Michel Berger', 'Daniel Balavoine' ],
                  ['Queen', 'Christine and the Queen', 'Freddie Mercury', 'The Beatles' ],
                  ['Le chant des sirènes', 'Suicide social', 'La fête est finie', 'Raelsan' ] ];
var score     = [ [0            , 0            , 1            , 0             ],
                  [0            , 1            , 0            , 0             ],
                  [0            , 0            , 0            , 1             ],
                  [1            , 0            , 0            , 0             ],
                  [0            , 1            , 0            , 0             ] ];
var musiques  = ['assets/music/bella.mp3', 'assets/music/seeyouagain.mp3', 'assets/music/lechanteur.mp3', 'assets/music/wewillrockyou.mp3', 'assets/music/suicidesocial.mp3'];

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
			if( reponses[ indiceCourantQuestions-1 ][ i ] == event.srcElement.innerText )
				indice = i; console.log( "trouvé !" );
		}

		totalPoints += score[ indiceCourantQuestions-1 ][ indice ];
	}
}
