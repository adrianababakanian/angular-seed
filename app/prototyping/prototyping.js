'use strict';

angular.module('myApp.prototyping', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prototyping', {
    templateUrl: 'prototyping/prototyping.html',
    controller: 'PrototypingCtrl'
  });
}])

.controller('PrototypingCtrl', [function() {
}]);
