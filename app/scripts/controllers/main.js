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

    $scope.success = false;

    $scope.submit = function(){
    	console.log($scope.myForm);
    	if( $scope.myForm.$valid ) {

    		$scope.success = !($scope.success);

		} else {
		    alert('The form is invalid');
		}	

    }


  });

