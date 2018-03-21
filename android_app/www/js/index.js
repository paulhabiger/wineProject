angular.module('WineProject', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "templates/event-menu.html"
    })
    .state('eventmenu.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    })
    .state('eventmenu.market', {
      url: "/market",
      views: {
        'menuContent' :{
          templateUrl: "templates/market.html",
          controller: "MarketCtrl"
        }
      }
    })
    .state('eventmenu.restaurant', {
      url: "/restaurant",
      views: {
        'menuContent' :{
          templateUrl: "templates/restaurant.html",
          controller: "RestaurantCtrl"
        }
      }
    })
	.state('eventmenu.happyhour', {
      url: "/happyhour",
      views: {
        'menuContent' :{
          templateUrl: "templates/happyhour.html",
          controller: "HappyHourCtrl"
        }
      }
    })
	.state('eventmenu.marketDetails', {
      url: "/marketDetails/:foodId",
      views: {
        'menuContent' :{
          templateUrl: "templates/marketDetails.html",
          controller: "MarketDetailsCtrl"
        }
      }
    })
	.state('eventmenu.restaurantDetails', {
      url: "/restaurantDetails/:foodId",
      views: {
        'menuContent' :{
          templateUrl: "templates/restaurantDetails.html",
          controller: "RestaurantDetailsCtrl"
        }
      }
    })
	.state('eventmenu.happyhourDetails', {
      url: "/happyhourDetails/:foodId",
      views: {
        'menuContent' :{
          templateUrl: "templates/happyhourDetails.html",
          controller: "HappyHourDetailsCtrl"
        }
      }
    })
	
  
  $urlRouterProvider.otherwise("/event/home");
})

.controller('MainCtrl', function($scope) {
  
  
})

.factory('MarketService', function($http) {
  var MarketService = function() {
      var promise = $http.get('http://www.paulusfwineapp.x10host.com/files/market.json').then(function (response) {
        return response.data;
      });
      return promise;
    }
  return MarketService;
})
.factory('RestaurantService', function($http) {
  var RestaurantService = function() {
      var promise = $http.get('http://www.paulusfwineapp.x10host.com/files/restaurant.json').then(function (response) {
        return response.data;
      });
      return promise;
    }
  return RestaurantService;
})
.factory('HappyHourService', function($http) {
  var HappyHourService = function() {
      var promise = $http.get('http://www.paulusfwineapp.x10host.com/files/menu.json').then(function (response) {
        return response.data;
      });
      return promise;
    }
  return HappyHourService;
})

.controller('MarketCtrl', function($http, $scope, MarketService) {
  MarketService().then(function(d){
	  $scope.foods = d;
  })
})
.controller('RestaurantCtrl', function($http, $scope, RestaurantService) {
  RestaurantService().then(function(d){
	  $scope.foods = d;
  })
})
.controller('HappyHourCtrl', function($http, $scope, HappyHourService) {
  HappyHourService().then(function(d){
	  $scope.foods = d;
  })
})

.controller('MarketDetailsCtrl', function($http, $scope, $stateParams, MarketService) {
  MarketService($stateParams.foodId).then(function(d){
	  $scope.foods = d;
	  $scope.id = $stateParams.foodId;
  })
})

.controller('RestaurantDetailsCtrl', function($http, $scope, $stateParams, RestaurantService) {
  RestaurantService($stateParams.foodId).then(function(d){
	  $scope.foods = d;
	  $scope.id = $stateParams.foodId;
  })
})

.controller('HappyHourDetailsCtrl', function($http, $scope, $stateParams, HappyHourService) {
  HappyHourService($stateParams.foodId).then(function(d){
	  $scope.foods = d;
	  $scope.id = $stateParams.foodId;
  })
});

