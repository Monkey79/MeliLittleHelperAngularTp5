var myModule = angular.module("Tp5AngularProj", ['ui.router']);

myModule.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('IndexState',{
		url:"/",
		controller:'IndexCtrl'
	});

    $stateProvider.state('Section1State', {
        url: "/Section1",
        templateUrl: 'views/Section1.html',
        controller: 'Section1Ctrl'
    });

     $stateProvider.state('Section2State', {
        url: "/Section2/?name&keyword",
        templateUrl: 'views/Section2.html',
        controller: 'Section2Ctrl'
    });
    
    $urlRouterProvider.otherwise("/");

});
