var breadcrumb = {
	init: function () {

		var widthMenu = $(".breadcrumb .with-menu").width() - 22;
		var widthLink = $(".breadcrumb .dropDown a").width();

		var decalageMenu = widthLink - widthMenu;
		$(".breadcrumb .dropDown a").css({
			"min-width": widthMenu + "px"
		});
		//$(".breadcrumb .dropDown").css({left : decalageMenu});

 		$(".breadcrumb .with-menu").mouseenter( function(){
	      $(".breadcrumb .dropDown").show();
	    }).mouseleave(function(){
	      $(".breadcrumb .dropDown").hide();
	    });
	}
};
