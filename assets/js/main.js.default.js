  // create the module and name it myApp
  // also include ngRoute for all our routing needs
  var myApp = angular.module('myApp', ['ngRoute']);

  // configure our routes
  myApp.config(function($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider

      // route for the home page
      .when('/', {
        templateUrl : 'partials/home.html',
        controller  : 'homeController'
      })

      // route for the sample page
      .when('/sample', {
        templateUrl : 'partials/sample.html',
        controller  : 'pageController'
      })

      // use the HTML5 History API
          $locationProvider.html5Mode(true);

  });

  // create the controller and inject Angular's $scope
  myApp.controller('homeController', function($scope) {
  	// Some js
 
  });

  myApp.controller('pageController', function($scope) {
 	// Some js
  });

 

  