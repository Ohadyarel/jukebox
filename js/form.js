$(document).ready(function(){
	$('#new_song').submit(function(e){
		e.preventDefault();
		var tempSong = new Song($("#new_title").val(),$("#new_artist").val(),$("#new_url").val());
		jb.addSong(tempSong);
		if ($('#play_next').is(':checked')) {
			console.log("box checked verify")
			jb.queue(tempSong);
		}
		var x = jb.songs.length - 1
		$('#playlist').append('<div class="playlist_song" id="'+x+'"><h4 id="pl_title">' + jb.songs[x].title + '</h4><p id="pl_artist">' + jb.songs[x].artist + '</p></div><div class="to_top" id="'+x+'"><span id="queue_up" class="glyphicon glyphicon-download-alt"></span></div>');
		$('#'+x).first().click(function(){
			jb.current_spot = x;
			jb.playJB();
			$('#play').hide();
			$('#pause').show();
		})
		this.reset();
	})
});