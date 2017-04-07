policyOverview.controller('payPremiumOnlineController',function($scope){
    $scope.onPayment = function () {

		function logInCallBack(data) {
			alert(data["message"]);
		}

		//validation pending


		var billingPayLoad = {
			
			"userName": $scope.user.name,
			"cardNo": $scope.user.cardNo,
			"cvv": $scope.user.cvv,
			"year": $scope.user.year,
			"month": $scope.user.month,
			"amount": $scope.user.amount
		}

//comment
		var loginPayLoad = {
			"userName": $scope.user.name,
			"password": $scope.user.password
		}

		logInService.login(loginPayLoad, logInCallBack);
	}
    
});


