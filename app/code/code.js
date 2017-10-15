'use strict';

angular.module('myApp.code', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/code', {
    templateUrl: 'code/code.html',
    controller: 'CodeCtrl'
  });
}])

.controller('CodeCtrl', [function() {
}]);
