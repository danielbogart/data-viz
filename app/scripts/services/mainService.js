(function() {
'use strict';

	angular
		.module('dataVizApp')
		.factory('mainService', mainService);


		mainService.$inject = ['titans', 'niners'];

		function mainService(titans, niners) {

			var service = {
				getChartConfig: getChartConfig
			};

			return service;

			function getChartConfig(params) {
				
				var chart = {
							options: {
								chart: {
									type: 'bar',
									height: 2000,
								}
							},
							series: [{
								data: params.losses,
								id: 'losses',
								name: 'Losses',
								color: params.lossColor,
								dataLabels: {
							                    enabled: true,
							                    allowOverlap: true
							                }
							},
							{
								data: params.wins,
								id: 'wins',
								name: 'Wins',
								color: params.winColor,
								dataLabels: {
							                    enabled: true,
							                    allowOverlap: true
							                }
							}],
							title: {
								text: params.teamName + ' Heads Up Records'
							},
							xAxis: {
								categories: params.teams
							},
							plotOptions: {
							            series: {
							                dataLabels: {
							                    enabled: true
							                }
							            }
							        },


							loading: false
						};
						
				return chart;
			}

	}
	
})();
