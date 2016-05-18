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
	}

	this.pauseJB = function() {
		this.current_play.url.pause()
	}

	this.playNext = function() {
		
	}

	this.findIndex = function() {
		for (i=0;i<this.songs.length;i++) {
			if (this.current_play == this.songs[i]) {
				return i
			}
		}
	}

}

var song1 = new Song("hi","there","http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/VARIOUS/665[kb]darkplanet.aif.mp3")

var song2 = new Song("hi2","there2","http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/VARIOUS/181[kb]cybersqueaks.aif.mp3")

var song3 = new Song("t3","a3","http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/VARIOUS/52[kb]crazysquirt.aif.mp3")

var jb = new Jukebox();
jb.addSong(song1);
jb.addSong(song2);
jb.addSong(song3);

$(document).ready(function(){
	$('#play').click(function() {
		jb.playJB()
		jb.current_play.url.addEventListener('ended', function(){
			// will play the next song on the playlist
		})
	})
	$('#pause').click(function() {
		jb.pauseJB()
	})
})