jQuery(document).ready(function($) {

	$('a.scroll').bind("click", function(e){
		var anchor = $(this);
		var href_cutted = '#'+(anchor.attr('href').split('#'))[1];
		$('html, body').stop().animate({
			scrollTop: $(href_cutted).offset().top
		}, 300);
		
		e.preventDefault();
	});

});