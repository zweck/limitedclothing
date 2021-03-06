/**
 * @file Defines behaviours for a nav module
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
	

	navigation = function(){

	};

	componentTasks.registerTask({
		taskSelector: 'nav',
		task: navigation()
	});


	return {};

});
