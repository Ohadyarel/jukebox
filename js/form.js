$(document).ready(function(){
	$('#new_song').submit(function(e){
		e.preventDefault();
		var tempSong = new Song($("#new_title").val(),$("#new_artist").val(),$("#new_url").val());
		jb.addSong(tempSong);
		if ($('#play_next').is(':checked')) {
			console.log("box checked verify")
			jb.queue(tempSong);
		}
		this.reset();
	})
});