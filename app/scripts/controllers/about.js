'use strict';

/**
 * @ngdoc function
 * @name dataVizApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dataVizApp
 */
angular.module('dataVizApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
