(function($) {
	

	$(function()
	{
		$('#mobile-menu').click(function()
		{
			$('#block-system-main-menu,#header').toggleClass('show');
		});

		$('#block-block-2').click(function(){

			window.location.href="/";
		})

		$('.about').click(function(event){

			event.preventDefault();
		});
		
	});

}(jQuery));
