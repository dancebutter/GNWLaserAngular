angular.module("mainModule", ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'views/home.html'
			})
			.state('news', {
				url: '/news',
				templateUrl: 'views/news.html'
			})
			.state('laserService', {
				url: '/laserservice',
				templateUrl: 'views/laserservice.html'
			});
	});