// object constructor for Song
function Song(title,artist,url) {
		this.title = title;
		this.artist = artist;
		this.url = new Audio(url);
}


// object constructor for Jukebox
function Jukebox() {
	
	this.songs = [];
	this.current_spot = 0;
	this.shuffle = false;

	// setting event listeners to all the songs in the Jukebox that will play the next song once the current song ends.
	this.setListeners = function(){
		for(var i = 0; i < this.songs.length; i++){
			this.songs[i].url.addEventListener('ended', function(){
				playNext();
			})
			this.songs[i].url.addEventListener('timeupdate', function(){
				$('#song_progress').css("width",getPerc() + "%")
			})
		}
	}

	this.addSong = function(song) {
		this.songs.push(song);
	}

	this.queue = function(song) {
		var spot = this.songs.indexOf(song)
		this.songs.splice(spot, 1);
		this.songs.splice(this.current_spot,0,song);
	}


	this.playJB = function() {
		this.songs[jb.current_spot].url.play();
		display()
	}

	this.pauseJB = function() {
		this.songs[this.current_spot].url.pause();
	}

	this.removeJB = function(spot) {
		this.songs.splice(spot, 1);
	}

}

// function for the next and previous buttons

function playNext() {
		jb.pauseJB()
		if (jb.shuffle) {
			jb.current_spot = Math.floor(Math.random() * jb.songs.length);
			jb.songs[jb.current_spot].url.currentTime = 0;

			jb.playJB();
		} else {
			if (jb.current_spot + 1 < jb.songs.length) {
				jb.current_spot += 1;
				jb.songs[jb.current_spot].url.currentTime = 0;
				jb.playJB()
			} else {
				jb.current_spot = 0
				jb.songs[jb.current_spot].url.currentTime = 0;
				reset_display()
				document.getElementById('pause').style.display = "none"
				document.getElementById('play').style.display = "inline-block"
			}
		}
	}

function playPrev() {
	jb.pauseJB();
	jb.songs[jb.current_spot].url.currentTime = 0;
	if (jb.current_spot - 1 >= 0) {
		jb.current_spot -= 1;
		jb.playJB()
	} else {
		jb.current_spot = 0;
		reset_display();
		document.getElementById('pause').style.display = "none"
		document.getElementById('play').style.display = "inline-block"
	}
}

// functions for show/hide the title and artist of the current song being played 

function display() {
	$('#song_title').text(jb.songs[jb.current_spot].title)
	$('#song_artist').text("by " + jb.songs[jb.current_spot].artist)
}

function reset_display() {
	$('#song_title').text("---")
	$('#song_artist').text("---")
	$('#song_length').text("")
}

// returns the progess of the current song in percentage
function getPerc(){
	return (jb.songs[jb.current_spot].url.currentTime * 100 / jb.songs[jb.current_spot].url.duration);
}

// setting up instances of songs and jukebox

var song1 = new Song("Amazing effect 1","the w's","http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/SOUND%20FX%20ZOO%20AND%20NATURE/2243[kb]zoo.aif.mp3")
var song2 = new Song("Amazing effect 2","the ww's","http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/SOUND%20FX%20ZOO%20AND%20NATURE/1377[kb]crazy_cat_yowl.aif.mp3")
var song3 = new Song("Amazing effect 3","the www's","http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/SOUND%20FX%20ZOO%20AND%20NATURE/636[kb]junglebird.aif.mp3")
var song4 = new Song("Amazing effect 4","the wwww's","http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/SOUND%20FX%20ZOO%20AND%20NATURE/112[kb]cheesy_lofi_werewolf.aif.mp3")

var jb = new Jukebox();
jb.addSong(song1);
jb.addSong(song2);
jb.addSong(song3);
jb.addSong(song4);
jb.setListeners();


