// setting a breakpoint to have both #accordion divs open for desktop view
function bp_view() {
	if ($(window).width() >= 768) {
		$('#collapseOne').addClass('in');
	} else {
		$('#collapseOne').removeClass('in');
	}
}

$(document).ready(function(){
	//setting up the display when page first loads
	bp_view();
	// listening for any changes in the window size
	$(window).resize(function(){
		bp_view();
	})
})