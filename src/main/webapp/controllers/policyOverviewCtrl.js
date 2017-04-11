policyOverview.controller('policyOverviewController', function ($scope, $rootScope, $mdDialog, $location, $http, $filter, $rootScope, policyService) {
  $scope.title = "policy overview"
	  
	  
	  
	  
  /*$scope.policyData = [
{
  "policyId": 1,
  "policyDate": 61223106600000,
  "status": "Y"
},
{
  "policyId": 2,
  "policyDate": 612231066000002,
  "status": "N"
},
      {
  "policyId": 3,
  "policyDate": 612231066000003,
  "status": "Y"
}
];*/


  //$scope.policyData  =  policyService.getPolicy(policyCallback);
	  var getAllPolicyPayLoad = {
			"userName": sessionStorage.loggedInUserName,
		}
	  
	  var init = function() {
	  	policyService.getAllPolicy(getAllPolicyPayLoad,allPolicyCallback);
  	  }
	  
	  function allPolicyCallback(data) {
	    $scope.policyData = data;
	  }  
	  
	  init();


  $rootScope.navigateHome = function () {
    $location.path("/home");
  }


  function policyCallback(data) {
    $scope.policyDetails = data;
	var d = new Date(data["policyDate"]);
	$scope.policyDate = d.getMonth()+"-"+d.getDate()+"-"+d.getFullYear();
  }   
  function subPolicyCallback(data) {
    $scope.subPolicyDetails = data;
    var d = new Date(data["policyDate"]);
	$scope.subPolicyDate = d.getMonth()+"-"+d.getDate()+"-"+d.getFullYear();
  } 
	
  $scope.getPolicyDetails= function(id){   
 
    policyService.getPolicy(id,policyCallback);
  }
  
  $scope.getSubPolicyDetails= function(id){   
 
    policyService.getSubPolicy(id,subPolicyCallback);
  }

  //popup
  $scope.openPayOnline = function (ev) {
    $mdDialog.show({
      controller: 'payPremiumOnlineController',
      templateUrl: 'views/payPremiumOnline.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
      .then(function (answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function () {
        $scope.status = 'You cancelled the dialog.';
      });
  };


});