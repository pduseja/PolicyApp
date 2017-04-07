policyOverview.controller('logInController', function ($scope, $mdDialog, logInService, $location,$rootScope) {

	$scope.onLogIn = function () {

		function logInCallBack(data) {
			$mdDialog.hide();
			$location.path("/policyOverview");

			$rootScope.allPolicyDetails = data;

		}

		//validation pending


		var loginPayLoad = {
			"userName": $scope.user.name,
			"password": $scope.user.password
		}

//comment
		var loginPayLoad = {
			"userName": $scope.user.name,
			"password": $scope.user.password
		}

		logInService.login(loginPayLoad, logInCallBack);
	}


});

