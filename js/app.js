angular.module("mainModule", ['ui.router'])
	.config(['$urlRouterProvider', '$stateProvider',function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'views/home.html',
				controller: function($scope) {}
			})
			.state('news', {
				url: '/news',
				templateUrl: 'views/news.html',

			})
			.state('laserService', {
				url: '/laserservice',
				templateUrl: 'views/laserservice.html'
			});
	}])
	.controller('homeCtrl', function($scope) {

	});