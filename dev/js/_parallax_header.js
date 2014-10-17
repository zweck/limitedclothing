/**
 * @file Defines behaviours for a parallax_header module
 * @author Phil Hauser phil.hsr@gmail.com
 */

define([
	'jquery',
	'componentTasks'
], function ($, componentTasks) {

	/**
	*
	* If your component has a task you will need to
	* set your component's task as a method:
	*
	* componentTaskMethod = function(){
	* };
	*
	*
	* And then pass that with the component selector
	* to the component task module:
	*
	* componentTasks.registerTask({
	*	selector: 'selector',
	*	task: componentTaskMethod
	* });
	*/
		
	parallaxScroll = function(){
		var didScroll = false;
		var $header = $("header");
		var $nav = $("nav");
		var $title = $("#title");
		var titleTop = $title.offset().top;
		var headerTop = $header.offset().top + $header.height();

		window.onscroll = doThisStuffOnScroll;

		function doThisStuffOnScroll(evt) {
			didScroll = true;

			if(didScroll){

				var doumentScroll = $(document).scrollTop();

				$title.css({"top" : doumentScroll / 4 + titleTop,"opacity" : 1-(doumentScroll / $header.height() * 1.5)});
				$("#stars").css("top", doumentScroll / 4);
				$("#stars2").css("top", doumentScroll / 8);
				$("#stars3").css("top", doumentScroll / 12);


				if(headerTop <= doumentScroll){
					$nav.addClass("scrolled");
				}else{
					$nav.removeClass("scrolled");
				}
			}

		}

		setInterval(function() {
			if(didScroll) {
				didScroll = false;
			}
		}, 100);


		$arrow = $("header .arrow");
		$arrow.on("click", function	(){
			$('html,body').animate({
				scrollTop: headerTop + 50
			}, 500);
		});

	};

	componentTasks.registerTask({
		taskSelector: '.parallax-header',
		task: parallaxScroll()
	});

	return {};

});
