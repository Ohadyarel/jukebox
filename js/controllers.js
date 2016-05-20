$(document).ready(function(){
	$('#play').click(function() {
		jb.playJB();
		$(this).hide();
		$('#pause').show();
	})
	$('#pause').click(function() {
		jb.pauseJB();
		$(this).hide();
		$('#play').show();
	})
	$('#next').click(function() {
		playNext();
	})
	$('#prev').click(function() {
		playPrev();
	})
	$('#rand').click(function() {
		console.log("clicked rand")
		jb.shuffle = !jb.shuffle;
	})


	// playlist display
	for (i=0;i<jb.songs.length;i++) {
		$('#playlist').append('<div class="playlist_song"><h3 id="pl_title">' + jb.songs[i].title + '</h3><p id="pl_artist">' + jb.songs[i].artist + '</p><span class="glyphicon glyphicon-option-vertical"></span></div>')
	}
	$('#goaway').hide()
})