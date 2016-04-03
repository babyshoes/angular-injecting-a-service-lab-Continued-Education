function ContactController($scope, $timeout) {
	$scope.name = 'Diane';

	$timeout(function() {
		$scope.name = 'a different name';
	}, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);
