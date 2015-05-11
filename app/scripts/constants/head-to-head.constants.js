(function() {
'use strict';

	var titans = {
		teamName: 'Tennessee Titans',
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Washington Redskins'],
		wins: [4, 7, 9, 27, 3, 5, 39, 28, 6, 21, 8, 6, 15, 13, 22, 21, 15, 4, 15, 7, 5, 23, 20, 4, 31, 14, 5, 5, 5, 8, 6],
		losses: [6, 6, 9, 14, 1, 6, 33, 34, 8, 15, 3, 5, 11, 27, 18, 27, 18, 8, 22, 5, 6, 18, 23, 7, 42, 25, 8, 10, 6, 2, 6],
		lossColor: "#FF0000",
		winColor: "#648FCC"
	};
	
	var niners = {
		teamName: 'San Francisco 49ers',
		wins: [29, 45, 1, 6, 7, 29, 9, 9, 15, 6, 36, 27, 2, 18, 2, 7, 5, 18, 8, 47, 15, 10, 6, 18, 11], 
		losses: [18, 29, 3, 5, 11, 30, 3, 17, 11, 7, 26, 30, 1, 25, 2, 5, 6, 21, 4, 25, 15, 2, 7, 12, 9], 
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		lossColor: "#AF1E2C",
		winColor: "#E6BE8A"	
	} 

	angular
		.module('app.constants', [])
		.constant('titans', titans)
		.constant('niners', niners);


})();