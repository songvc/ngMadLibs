'use strict';

/**
 * @ngdoc function
 * @name ngMadLibsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngMadLibsApp
 */
angular.module('ngMadLibsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
