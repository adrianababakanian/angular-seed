'use strict';

angular.module('myApp.design', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/design', {
    templateUrl: 'design/design.html',
    controller: 'DesignCtrl'
  });
}])

.controller('DesignCtrl', [function() {
}]);
