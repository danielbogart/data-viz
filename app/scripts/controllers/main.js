(function() {
'use strict';

	angular
		.module('dataVizApp')
		.controller('MainCtrl', MainCtrl);

		MainCtrl.$inject = ['$scope', '$stateParams', 'mainService', 'niners'];

		function MainCtrl($scope, $stateParams, mainService, niners) {

			var vm = $scope;
			var teamObject = mainService.getTeamObject($stateParams.team);
			
			//catch for incorrect/blank params
			if (!teamObject) { teamObject = mainService.getTeamObject('niners'); };
			vm.chartConfig = mainService.getChartConfig(teamObject);
		}
	
})();
