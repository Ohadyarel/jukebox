$(document).ready(function(){
	$('#new_song').submit(function(e){
		e.preventDefault();
		var tempSong = new Song($("#new_title").val(),$("#new_artist").val(),$("#new_url").val());
		jb.addSong(tempSong);
		this.reset();
	})
});