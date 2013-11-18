
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

	if((telaWidth>601)&&(telaWidth<800)){

		var $container = $('.list-projects');
		// initialize
		$container.masonry({
			columnWidth: 303,
			itemSelector: '.project'
		});
		var msnry = $container.data('masonry');

	}else if((telaWidth>840)&&(telaWidth<1005)){

		var $container = $('.list-projects');
		// initialize
		$container.masonry({
			columnWidth: 409,
			itemSelector: '.project'
		});
		var msnry = $container.data('masonry');

	}else if(telaWidth>1006){

		var $container = $('.list-projects');
		// initialize
		$container.masonry({
			columnWidth: 320,
			itemSelector: '.project'
		});
		var msnry = $container.data('masonry');

	}
}
