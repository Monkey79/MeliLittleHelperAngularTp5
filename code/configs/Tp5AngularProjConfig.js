var myModule = angular.module("Tp5AngularProj", ['ui.router']);

myModule.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('IndexCtrl',{
		url:"/",
		controller:'IndexCtrl'
	});

    $stateProvider.state('Section1Ctrl', {
        url: "/Section1",
        templateUrl: 'views/Section1.html',
        controller: 'Section1Ctrl'
    });

     $stateProvider.state('Section2Ctrl', {
        url: "/Section2/?name&keyword",
        templateUrl: 'views/Section2.html',
        controller: 'Section2Ctrl'
    });
    
    $urlRouterProvider.otherwise("/");

});
