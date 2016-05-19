$(document).ready(function(){
	$('#play').click(function() {
		jb.playJB();
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
	$('#rand').click(function() {
		console.log("clicked rand")
		jb.shuffle = !jb.shuffle;
	})
})