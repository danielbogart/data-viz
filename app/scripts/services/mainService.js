(function() {
'use strict';

	angular
		.module('dataVizApp')
		.factory('mainService', mainService);

		function mainService() {

			var service = {
				getChartConfig: getChartConfig
			};

			return service;

		function getChartConfig() {
			var teams = ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Washington Redskins'];
			var wins = [4, 7, 9, 27, 3, 5, 39, 28, 6, 21, 8, 6, 15, 13, 22, 21, 15, 4, 15, 7, 5, 23, 20, 4, 31, 14, 5, 5, 5, 8, 6];
			var losses = [6, 6, 9, 14, 1, 6, 33, 34, 8, 15, 3, 5, 11, 27, 18, 27, 18, 8, 22, 5, 6, 18, 23, 7, 42, 25, 8, 10, 6, 2, 6];
			
			var chart = {
						options: {
							chart: {
								type: 'bar',
								height: 2000,
							}
						},
						series: [{
							data: losses,
							id: 'losses',
							name: 'Losses',
							color: "#FF0000",
							dataLabels: {
						                    enabled: true,
						                    allowOverlap: true
						                }
						},
						{
							data: wins,
							id: 'wins',
							name: 'Wins',
							color: '#648FCC',
							dataLabels: {
						                    enabled: true,
						                    allowOverlap: true
						                }
						}],
						title: {
							text: 'Titans Heads Up Records (1960-2014)'
						},
						xAxis: {
							categories: teams
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
