
jQuery(document).ready(function($) {

	$(window).resize(function() {
		telaHeight = $(window).height();
    	telaWidth = $(window).width();

    	carregarMasonry();
	});

	carregarMasonry();

});

function carregarMasonry(){
	telaWidth = $(window).width();

	if(telaWidth>700){
		var $container = $('.list-projects');
		// initialize
		$container.masonry({
			columnWidth: 320,
			itemSelector: '.project'
		});
		var msnry = $container.data('masonry');
	}
}
