function listeners(i) {
	jb.songs[i].url.addEventListener('ended', function(){
		playNext();
	})
	jb.songs[i].url.addEventListener('timeupdate', function(){
		$('#song_progress').css("width",getPerc() + "%")
	})
}
$(document).ready(function(){
	$('#new_song').submit(function(e){
		e.preventDefault();
		if ($("#new_title").val() && $("#new_artist").val() && $("#new_url").val()) {
			var tempSong = new Song($("#new_title").val(),$("#new_artist").val(),$("#new_url").val());
			jb.addSong(tempSong);
			if ($('#play_next').is(':checked')) {
				jb.queue(tempSong);
				listeners(0);
			} else {
				listeners(jb.songs.length - 1);
			}
			display_pl();
			$('#submit').css('background','rgba(51, 142, 32, .7)')
		} else {
			console.log("failed")
			$('#submit').css('background','rgba(255, 0, 0, .7)')
		}
		this.reset();
	})
});