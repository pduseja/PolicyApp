policyOverview.controller('homeController',function($scope,$mdDialog, $location){
    
    $scope.openLogIn = function(ev){
    
    $mdDialog.show({
      controller: 'logInController',
      templateUrl: 'views/logIn.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };
    
    
    $scope.navigatePolicyDetails = function(){
        $location.path("/policyOverview");
    }
	
	$scope.navigatequickquote = function(){
        $location.path("/quickquote");
    }
    
    
});

