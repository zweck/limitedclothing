/**
 * @file Defines behaviours for a details_lightbox module
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
	

	detailsLightbox = function(){

		var lightboxControls = {

			init: function() {
				this.$lighbox = $(".lightbox-container");
				this.$lighboxButton = $(".lightbox-details-button");
				this.$lighboxBg = $(".lightbox-container");
				this.$lightboxCancel = $("button.cancel");

				this.bindEvents();
			},

			bindEvents: function(){
				var self = this;
				this.$lighboxButton.on("click", function(evt){

					self.title = $(this).find("[data-title]").data("title");
					self.description = $(this).find("[data-desc]").data("desc");
					self.price = $(this).find("[data-price]").data("price");

					$(".order-details .title").text(self.title);
					$(".order-details .description").text(self.description);
					$(".order-details .price").text(self.price);

					self.open();
				});
				this.$lighboxBg.on("click", function(evt){
					if (evt.target !== this) return;
					self.close();
				});
				this.$lightboxCancel.on("click", function(evt){
					self.close();
				});
			},

			open: function(){
				this.$lighbox.addClass("show");
			},

			close: function(){
				var self = this;
				setTimeout(function(){
					self.$lighbox.css("opacity", 0);
				}, 300);
				setTimeout(function(){
					self.$lighbox.removeClass("show");
					self.$lighbox.css("opacity", "");
				}, 600);
			},

			populate: function(){

			}
		};

		lightboxControls.init();

	};


	componentTasks.registerTask({
		selector: '.lightbox-container',
		task: detailsLightbox
	});


	return {};

});
