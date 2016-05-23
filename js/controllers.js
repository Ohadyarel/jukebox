// adding click events to the playlist so it will play the song clicked + playlist display
function display_pl() {
	$('#playlist').empty();
	for (i=0;i<jb.songs.length;i++) {
		$('#playlist').append('<div class="playlist_song" id="'+i+'"><h4 id="pl_title">' + jb.songs[i].title + '</h4><p id="pl_artist">' + jb.songs[i].artist + '</p></div><div class="to_top" id="'+i+'"><span id="queue_up" class="glyphicon glyphicon-remove"></span></div>')
	}
	$('.to_top').click(function(){
		jb.removeJB(jb.songs[$(this).attr('id')]);
		display_pl();
	})
	$('.playlist_song').click(function(){
			jb.pauseJB();
			var spot = parseInt($(this).first().attr('id'));
			jb.current_spot = spot
			jb.playJB()
			$('#play').hide();
			$('#pause').show();
		});
}

// setting up click event for the controllers
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
		jb.shuffle = !jb.shuffle;
		$(this).toggleClass('active_shuffle');
	})

	display_pl();

	// making the progress bar clickable

	$('#prog_bar').on('click',function(e){
		var barLeft = $(this).offset().left;
	  var clickLeft = e.pageX;
	  var howFarFromLeft = clickLeft - barLeft;
	  var prog = Math.floor(howFarFromLeft * 100 / 308);
	  var place = (prog/100) * jb.songs[jb.current_spot].url.duration
	  jb.songs[jb.current_spot].url.currentTime = place;
	})

})
