/**
 * @file Defines behaviours for a button module
 * @author Phil Hauser phil.hsr@gmail.com
 */

define([
	'jquery',
	'componentTasks',
	'checkout'
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

	buttonControl = function(){

		var addRippleEffect = function (e) {
			var target = e.target;
			if (target.tagName.toLowerCase() !== 'button') return false;
			var rect = target.getBoundingClientRect();
			var ripple = target.querySelector('.ripple');
			if (!ripple) {
				ripple = document.createElement('span');
				ripple.className = 'ripple';
				ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
				target.appendChild(ripple);
			}
			ripple.classList.remove('show');
			var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
			var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
			ripple.style.top = top + 'px';
			ripple.style.left = left + 'px';
			ripple.classList.add('show');
			return false;
		};

		document.addEventListener('click', addRippleEffect, false);


		var handler = StripeCheckout.configure({
			key: 'pk_test_uWndbmgkDOHtDyf4gzgjR1sr',
			image: '/img/square-image.jpg',
			token: function(token) {
			// Use the token to create the charge with a server-side script.
			// You can access the token ID with `token.id`
			}
		});

		$(".buy-button").on('click', function(e){

			var itemTitle = $(".order-details .title").text();
			var itemPrice = $(".order-details .price").text();
			var description = itemTitle + " £" + itemPrice;
			var amount = itemPrice * 100;

			handler.open({
			name: 'Limited Clothing',
			description: description,
			currency: "GBP",
			allowRememberMe: true,
			billingAddress: true,
			shippingAddress: true,
			amount: amount});
			//e.preventDefault();

		});



	};

	componentTasks.registerTask({
		selector: 'button',
		task: buttonControl
	});

	return {};

});
