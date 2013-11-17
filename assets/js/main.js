
jQuery(document).ready(function($) {

	var $container = $('.list-projects');
	// initialize
	$container.masonry({
		columnWidth: 320,
		itemSelector: '.project'
	});
	var msnry = $container.data('masonry');

});
