// object constructor for Song
function Song(title,artist,url) {
		this.title = title;
		this.artist = artist;
		this.url = new Audio(url);
}


// object constructor for Jukebox
function Jukebox() {
	this.songs = [];
	this.current_play = 0;

	this.addSong = function(song) {
		this.songs.push(song);
	}

	this.queue = function(song) {
		this.songs.unshift(song);
	}

	this.playJB = function() {
		if (this.current_play) {
			this.current_play.url.play();
		} else {
			this.songs[0].url.play();
			this.current_play = this.songs[0]
		}
		this.current_play.url.addEventListener('ended', function(){
			playNext();
		})
	}

	this.pauseJB = function() {
		this.current_play.url.pause()
	}

	this.findIndex = function() {
		for (i=0;i<this.songs.length;i++) {
			if (this.current_play == this.songs[i]) {
				return i
			}
		}
	}
}

function playNext() {
	if (jb.current_play == 0) {
		jb.current_play = jb.songs[0];
		jb.current_play.url.currentTime = 0;
		jb.playJB()
	} else if ((jb.findIndex() + 1) < jb.songs.length) {
		jb.pauseJB()
		jb.current_play = jb.songs[jb.findIndex() + 1];
		jb.current_play.url.currentTime = 0;
		jb.playJB()
	}  
}

function playPrev() {
	if (jb.current_play == 0) {
		jb.current_play = jb.songs[jb.songs.length - 1];
		jb.current_play.url.currentTime = 0;
		jb.playJB()
	} else if ((jb.findIndex() - 1) >= 0) {
		jb.current_play = jb.songs[jb.findIndex() - 1];
		jb.current_play.url.currentTime = 0;
		jb.playJB()
	}
}

// setting up instances of songs and jukebox

var song1 = new Song("hi","there","http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/VARIOUS/665[kb]darkplanet.aif.mp3")

var song2 = new Song("hi2","there2","http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/VARIOUS/181[kb]cybersqueaks.aif.mp3")

var song3 = new Song("t3","a3","http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/VARIOUS/52[kb]crazysquirt.aif.mp3")

var song4 = new Song("t3","a3","http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/VARIOUS/52[kb]crazysquirt.aif.mp3")

var song5 = new Song("t3","a3","http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/VARIOUS/52[kb]crazysquirt.aif.mp3")

var jb = new Jukebox();
jb.addSong(song1);
jb.addSong(song2);
jb.addSong(song3);
jb.addSong(song4);
jb.addSong(song5);


