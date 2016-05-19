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
		}
	}

	this.addSong = function(song) {
		this.songs.push(song);
	}

	this.queue = function(song) {
		var spot = this.songs.indexOf(song)
		this.songs.splice(spot, 1);
		this.songs.unshift(song);
	}


	this.playJB = function() {
		this.songs[jb.current_spot].url.play();
		display()
	}

	this.pauseJB = function() {
		this.songs[this.current_spot].url.pause();
	}

}


function playNext() {
		jb.pauseJB()
		jb.songs[jb.current_spot].url.currentTime = 0;
		if (jb.shuffle) {
			jb.current_spot = Math.floor(Math.random() * jb.songs.length);
			jb.playJB();
		} else {
			if (jb.current_spot + 1 < jb.songs.length) {
				jb.current_spot += 1;
				jb.playJB()
			} else {
				jb.current_spot = 0
				reset_display()
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
	}
}

function display() {
	$('#song_title').text(jb.songs[jb.current_spot].title)
	$('#song_artist').text(jb.songs[jb.current_spot].artist)
	$('#song_length').text(Math.round(jb.songs[jb.current_spot].url.duration))
}

function reset_display() {
	$('#song_title').text("")
	$('#song_artist').text("")
	$('#song_length').text("")
}

// setting up instances of songs and jukebox

var song1 = new Song("song1","there","http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/VARIOUS/665[kb]darkplanet.aif.mp3")

var song2 = new Song("song2","there2","http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/VARIOUS/181[kb]cybersqueaks.aif.mp3")

var song3 = new Song("song3","a3","http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/VARIOUS/665[kb]darkplanet.aif.mp3")

var song4 = new Song("song4","a4","http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/VARIOUS/181[kb]cybersqueaks.aif.mp3")

var song5 = new Song("song5","a5","http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/VARIOUS/665[kb]darkplanet.aif.mp3")

var jb = new Jukebox();
jb.addSong(song1);
jb.addSong(song2);
jb.addSong(song3);
jb.addSong(song4);
jb.addSong(song5);
jb.setListeners();


