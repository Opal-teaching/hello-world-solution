
 // Declares the component in the angular module

HelloWorldController.$inject = []; // Injects the angular dependencies for this controller (there are none)

/* @ngInject */
export function HelloWorldController() { // function representing this controller. vm is the equivalent of $scope
	const vm = this;
	vm.hello = "Hello World!";
}