'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication','$location',
	function($scope, Authentication,$location) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		console.log("In home controller");
		console.log($scope.authentication);
		//Redirect user to login page if not logged in
		if($scope.authentication.user==''){
			$location.path('/signin')
		}
	}
]);