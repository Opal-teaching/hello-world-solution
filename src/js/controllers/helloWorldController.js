(function(){
	'use strict';
	
	angular
		.module('HelloWorld') // Fetches the angular the module so that the controller can access it.
		.controller("HelloWorldController", HelloWorldController); // Declares the component in the angular module

	HelloWorldController.$inject = []; // Injects the angular dependencies for this controller (there are none)

	/* @ngInject */
	function HelloWorldController() { // function representing this controller. vm is the equivalent of $scope
		const vm = this;
		vm.hello = "Hello World!";
	}
})();