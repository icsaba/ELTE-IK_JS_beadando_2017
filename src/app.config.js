angular.module('persona')
.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'home/index.html',
      controller: 'HomeController as home'
    })
    .otherwise('/home');
});
