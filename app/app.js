'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  // 'ngAnimate',
  'myApp.design',
  'myApp.code',
  'myApp.prototyping',
  'myApp.home',
  'myApp.page1',
  'myApp.stubhub',
  'myApp.personalsite',
  'myApp.about',
  'myApp.version',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
