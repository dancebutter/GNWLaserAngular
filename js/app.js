angular.module("mainModule", ['ui.router'])
	.config(['$urlRouterProvider', '$stateProvider',function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('home');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'views/home.html',
				controller: 'homeCtrl'
			})
			.state('news', {
				url: '/news',
				templateUrl: 'views/news.html'
			})
			.state('laserService', {
				url: '/laserservice',
				templateUrl: 'views/laserservice.html'
			})
			.state('gallery', {
				url: '/gallery',
				templateUrl: 'views/gallery.html'
			})
			.state('product', {
				url: '/product',
				templateUrl: 'views/product.html'
			})
			.state('company', {
				url: '/company',
				templateUrl: 'views/company.html'
			})
			.state('contactus', {
				url: '/contactus',
				templateUrl: 'views/contactus.html'
			});
	}]);