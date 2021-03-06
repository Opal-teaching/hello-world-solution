(function(){ // Wraps the controller in an Immediately Invoked Function Expression (as per the Johnpapa style guide) to limit variable scope
	'use strict';
	
	angular
		.module('HelloWorld') // Fetches the angular module so that the controller can access it
		.controller("HelloWorldController", HelloWorldController); // Declares the controller component in the angular module and connects it to the function below

	HelloWorldController.$inject = []; // Injects the angular dependencies for this controller (there are none)

	/* @ngInject */
	function HelloWorldController() { // Function representing this controller
		const vm = this; // vm is the equivalent of $scope
		vm.hello = "Hello World!"; // Declare a controller variable than can be used in its view
	}
})();
