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
})