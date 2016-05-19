$(document).ready(function(){
	$('#play').click(function() {
		jb.playJB(jb.current_spot);
	})
	$('#pause').click(function() {
		jb.pauseJB();
	})
	$('#next').click(function() {
		playNext();
	})
	$('#prev').click(function() {
		playPrev();
	})

})