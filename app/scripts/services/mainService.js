(function() {
'use strict';

	angular
		.module('dataVizApp')
		.factory('mainService', mainService);


		mainService.$inject = ['titans', 'niners', 'cardinals', 'falcons'];

		function mainService(titans, niners, cardinals, falcons) {

			var service = {
				getChartConfig: getChartConfig,
				getTeamObject: getTeamObject
			};

			return service;


			function getTeamObject(team) {
				var teams = { 
					'titans': titans,
					'niners': niners,
					'cardinals': cardinals,
					'falcons': falcons
				}
				return teams[team];
			}

			function getChartConfig(teamObject) {
				
				var wins = 0;
				var losses = 0;

				function sum(varName, type) {
					for (var i = teamObject[type].length; i--;) {
						varName += teamObject[type][i];
					}
					return varName;
				}

				var wins = sum(wins, 'wins');
				var losses = sum(losses, 'losses');

				var overallRecord = '(' + wins + ' wins and ' + losses + ' losses)';

				var chart = {
							options: {
								chart: {
									type: 'bar',
									height: 2000,
								}
							},
							series: [{
								data: teamObject.losses,
								id: 'losses',
								name: 'Losses',
								color: teamObject.lossColor,
								dataLabels: {
							                    enabled: true,
							                    allowOverlap: true
							                }
							},
							{
								data: teamObject.wins,
								id: 'wins',
								name: 'Wins',
								color: teamObject.winColor,
								dataLabels: {
							                    enabled: true,
							                    allowOverlap: true
							                }
							}],
							title: {
								text: teamObject.teamName + ' Heads Up Records <br>' + overallRecord
							},
							xAxis: {
								categories: teamObject.teams
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
