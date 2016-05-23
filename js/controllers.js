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
	function display_pl() {
		$('#playlist').empty();
		for (i=0;i<jb.songs.length;i++) {
			$('#playlist').append('<div class="playlist_song" id="'+i+'"><h4 id="pl_title">' + jb.songs[i].title + '</h4><p id="pl_artist">' + jb.songs[i].artist + '</p></div><div class="to_top" id="'+i+'"><span id="queue_up" class="glyphicon glyphicon-download-alt"></span></div>')
		}
		$('.to_top').click(function(){
			jb.queue(jb.songs[$(this).attr('id')])
			console.log('click event for top song')
			display_pl();
			$('.to_top').first().hide()
		})
	}

	display_pl();
	$('#goaway').hide()

//<span class="glyphicon glyphicon-option-vertical"></span>
	
	$('.to_top').first().hide()
	$('.playlist_song').click(function(){
		jb.current_spot = $(this).first().attr('id')
		jb.playJB()
		$('#play').hide();
		$('#pause').show();
	});



})
