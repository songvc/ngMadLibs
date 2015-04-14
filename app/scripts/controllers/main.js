'use strict';

/**
 * @ngdoc function
 * @name ngMadLibsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngMadLibsApp
 */
angular.module('ngMadLibsApp',["ngMessages"])
  .controller('MainCtrl', function ($scope) {
    $scope.lists = [
	    {name:'female-name'},
	    {name:'job-title'},
	    {name:'tedious-task'},
	    {name:'dirty-task'},
	    {name:'celebrity'},
	    {name:'useless-skill'},
	    {name:'adjective'},
	    {name:'obnoxious-celebrity'},
	    {name:'huge-number'}
    ];
	
	//saving originals into defaults
	$scope.defaults = angular.copy($scope.lists);

	$scope.success = false;

    $scope.submit = function(){
    	
		$scope.erroralert = false;

    	if( $scope.myForm.$valid ) {

    		$scope.success = true;

		} else {
		    $scope.erroralert = true;

		}	
    }

    $scope.startover = function(){
    	$scope.success = false;
		$scope.lists = angular.copy($scope.defaults);
    	$scope.myForm.$setPristine();
		console.log('empty');
    }


  });

