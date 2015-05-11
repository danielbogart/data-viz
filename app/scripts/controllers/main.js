(function() {
'use strict';

	angular
		.module('dataVizApp')
		.controller('MainCtrl', MainCtrl);

		MainCtrl.$inject = ['$scope', 'mainService', 'titans', 'niners'];

		function MainCtrl($scope, mainService, titans, niners) {

			var vm = $scope;
			vm.chartConfig = mainService.getChartConfig(niners);

		}
	
})();
