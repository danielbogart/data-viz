(function() {
'use strict';

	angular
		.module('dataVizApp')
		.factory('mainService', mainService);


		mainService.$inject = ['titans', 'niners', 'cardinals', 'falcons', 'eagles'];

		function mainService(titans, niners, cardinals, falcons, eagles) {

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
					'falcons': falcons,
					'eagles': eagles
				}
				return teams[team];
			}

			function addDefunctTeams(teamObject) {
				var defunct = '(defunct)';
				var regex = new RegExp('\\b' + defunct + '\\b');

				for (var i = 31; i < teamObject.teams.length; i++) {
					if (!regex.test(teamObject.teams[i])) {
						teamObject.teams[i] += ' (defunct)';
					}
				}

				return teamObject;
			}

			function getWinRates(teamObject) {
				var rates = [];

				for (var i = 0; i < teamObject.teams.length; i++) {
					var singleWinRate = teamObject.wins[i]/(teamObject.wins[i] + teamObject.losses[i] + teamObject.ties[i]);
					singleWinRate = singleWinRate * 100;
					rates.push(singleWinRate.toFixed(0));
				}

				return rates;
			}

			function getChartConfig(teamObject) {

				teamObject = addDefunctTeams(teamObject);
				var winRates = getWinRates(teamObject);

				var wins = 0;
				var losses = 0;
				var ties = 0;

				function sum(varName, type) {
					for (var i = teamObject[type].length; i--;) {
						varName += teamObject[type][i];
					}
					return varName;
				}

				var wins = sum(wins, 'wins');
				var losses = sum(losses, 'losses');
				var ties = sum(ties, 'ties');

				var overallRecord = '(' + wins + ' wins, ' + losses + ' losses, ' + ties + ' ties)';

				var chart = {
							options: {
								chart: {
									type: 'bar',
									height: 3000,
									style: {
										fontFamily: "Helvetica Neue"
									},
								},
								tooltip: {
									borderRadius: 5,
									formatter: function() { 
										return this.x +
                    					'<br>' + '<br/><span style="color:'+ this.series.color +'">\u25CF</span> ' + 
                    					this.series.name + ': <b>' + this.y + '</b> ' +
                    					'<br><span style="color:black">\u25CF</span> Win rate: ' + 
                    					'<b>' + winRates[(teamObject.teams.indexOf(this.x))] + '%</b>'; 
                    				}
								},
							},

							series: [{
				                pointPadding: 0,
				                groupPadding: 0.1,
				                borderWidth: 0,
				                shadow: false,
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
								pointPadding: 0,
				                groupPadding: 0.1,
				                borderWidth: 0,
				                shadow: false,
								data: teamObject.wins,
								id: 'wins',
								name: 'Wins',
								color: teamObject.winColor,
								dataLabels: {
							                    enabled: true,
							                    allowOverlap: true
							                }
							},
							{
								pointPadding: 0,
				                groupPadding: 0.1,
				                borderWidth: 0,
				                shadow: false,
								data: teamObject.ties,
								id: 'ties',
								name: 'Ties',
								color: teamObject.tieColor,
								dataLabels: {
							                    enabled: true,
							                    allowOverlap: true,
												formatter:function() {
													if(this.y != 0) {
														return this.y;
													}
												}
							                }
							}],
							title: {
								text: teamObject.teamName + '<br>' + overallRecord
							},
							xAxis: {
								categories: teamObject.teams,
								tickLength: 0,
								labels: {
									style: { 
										color: 'black',
									}
								}
							},
							yAxis: {
								minTickInterval: 10,
								labels: {
									style: { 
										color: 'black',
									}
								}
							},
							plotOptions: {
					            series: {
					                dataLabels: {
					                    enabled: false	
					                },
					            }
					        },


							loading: false
						};
						
				return chart;
			}

	}
	
})();
