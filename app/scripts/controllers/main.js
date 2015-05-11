(function() {
'use strict';

	angular
		.module('dataVizApp')
		.controller('MainCtrl', MainCtrl);

		MainCtrl.$inject = ['$scope', 'mainService'];

		function MainCtrl($scope, mainService) {

			var vm = $scope;
			vm.chartConfig = mainService.getChartConfig();

		}
	
})();
