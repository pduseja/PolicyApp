policyOverview.controller('quickQuoteController', function ($scope,policyService, $rootScope) {

    $scope.user = {
        title: 'Developer',
        email: 'ipsum@lorem.com',
        firstName: '',
        lastName: '',
        company: 'Google',
        address: '1600 Amphitheatre Pkwy',
        city: 'Mountain View',
        state: 'CA',
        biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
        postalCode: '94043'
    };  
		
	$scope.states = ('Andhra Pradesh,Arunachal Pradesh,Assam Bihar,Chhattisgarh,Goa,Gujarat,Maharashtra').split(',').map(function (state) {
            return { abbrev: state };
        });
		
	$scope.covAmts = ('100000 500000 1000000').split(' ').map(function (covAmt) {
            return { abbrev: covAmt };
        });
		
	$scope.terms = ('5 10 20 35').split(' ').map(function (term) {
            return { abbrev: term };
        });
		
	$scope.tobUses = ('Yes No').split(' ').map(function (tobUse) {
            return { abbrev: tobUse };
        });
		
	$scope.healths = ('Excellent VeryGood Good Average No').split(' ').map(function (health) {
            return { abbrev: health };
        });




    function quoteCallback(data) {
            alert(data["message"]);
    }
    $scope.onGetQuote = function () {
 
        var data = {
            "term": parseInt($scope.user.term),
			"age": 21,
            "sumAssured": parseInt($scope.user.covAmt),
            "userName": $scope.user.firstName+'_'+$scope.user.lastName,
            "firstName": $scope.user.firstName,
            "lastName": $scope.user.lastName,
            "smokerFlag": $scope.user.tobacoUse,
            "state": $scope.user.state,
			"dob":$scope.user.dob.getTime(),
			"gender":$scope.user.gender,
			"height":parseInt($scope.user.height),
			"weight":parseInt($scope.user.weight),
			"health":$scope.user.health
        }
        policyService.getQuote(data, quoteCallback);
    }

})
    .config(function ($mdThemingProvider) {

        // Configure a dark theme with primary foreground yellow

        // $mdThemingProvider.theme('docs-dark', 'default')
        //   .primaryPalette('yellow')
        //   .dark();

    });