var policyOverview = angular.module('policyOverview',['ngMaterial','ngRoute','ngMdIcons','ngMessages'])

.config(['$routeProvider', function($routeProvider){
				$routeProvider
				.when('/home',{
                        templateUrl: 'views/home.html',
			            controller: 'homeController'
                      })
                .when('/policyOverview',{
                        templateUrl: 'views/policyOverview.html',
			            controller: 'policyOverviewController'
                      })
                .when('/quickquote',{
                        templateUrl: 'views/quickquote.html',
			            controller: 'quickQuoteController'
                      })
				.otherwise({
                    redirectTo:'/home'
                });
			}]);
