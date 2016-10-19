// Start Foundation
$(document).foundation();

// On Load Scripts
$(document).ready(function(){

	var date 				= new Date();
	var $footer 			= $('#footer');
	var $current_year 		= date.getFullYear();



	// Footer Current Date
	var $copyright_year 	= $('#current_digit_year');

	// Get date, inject. Fade makes a better UX
	$copyright_year.text($current_year);

	if ( !$footer.is(':visible') ){
		$footer.slideDown();
	}

});