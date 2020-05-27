'use strict';

	const playList = [{
		author: "led zeppelin",
		song: "stairway to heaven",
		duration: "2:03"
	},
	{
		author: "queen",
		song: "bohemian rhapsody",
		duration: "2:30"
	},
	{
		author: "lynyrd skynyrd",
		song: "free bird",
		duration: "1:56"
	},
	{
		author: "deep purple",
		song: "smoke on the water",
		duration: "3:03"
	},
	{
		author: "jimi hendrix",
		song: "all along the watchtower",
		duration: "2:53"
	},
	{
		author: "AC/DC",
		song: "back in black",
		duration: "2:43"
	},
	{
		author: "queen",
		song: "we will rock you",
		duration: "2:13"            
	},
	{
		author: "metallica",
		song: "enter sandman",
		duration: "3:03"            
	}
	];
	
function showMusic(playList) {
	const list = document.querySelector('[data-list]');
	const tmpl = document.querySelector('[data-tmpl]').innerHTML;

	let listHtml = '';

	for (const music of playList) {    
		// inside tmpl replce all {{}} with real data
		listHtml += tmpl
						.replace(/{{duration}}/gi, music.duration)
						.replace(/{{author}}/gi, music.author)
						.replace(/{{song}}/gi, music.song)
	;
	}
	list.innerHTML = listHtml;
};

showMusic(playList);











