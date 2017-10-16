'use strict';

angular.module('myApp.stubhub', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/stubhub', {
    templateUrl: 'stubhub/stubhub.html',
    controller: 'StubhubCtrl'
  });
}])

.controller('StubhubCtrl', [function() {
}]);
