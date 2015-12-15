var breadcrumb = {
	init: function () {
		$(".dropDown").fadeOut();
		$(".dropDown").css({opacity:1});

 		$(".breadcrumb .with-menu").mouseenter( function(){
 			var elem = "#" + $(this).attr('id');
 			var widthMenu = $(elem).width() - 22;
 			$(".breadcrumb .dropDown a").css({
				"min-width": widthMenu + "px"
			});
			$(elem + " .dropDown").fadeIn(300);
	    }).mouseleave(function(){
	    	var elem = "#" + $(this).attr('id');
			$(elem + " .dropDown").fadeOut(300);
	    });
	}
};
