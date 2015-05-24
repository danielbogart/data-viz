(function() {
'use strict';

	var titans = {
		teamName: 'Tennessee Titans',
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Washington Redskins'],
		wins: [4, 7, 9, 27, 3, 5, 39, 28, 6, 21, 8, 6, 15, 13, 22, 21, 15, 4, 15, 7, 5, 23, 20, 4, 31, 14, 5, 5, 5, 8, 6],
		losses: [6, 6, 9, 14, 1, 6, 33, 34, 8, 15, 3, 5, 11, 27, 18, 27, 18, 8, 22, 5, 6, 18, 23, 7, 42, 25, 8, 10, 6, 2, 6],
		ties: [],
		lossColor: "#FF0000",
		winColor: "#648FCC",
		tieColor: ''
	};
	
	var niners = {
		teamName: 'San Francisco 49ers',
		wins: [29, 45, 1, 6, 7, 29, 9, 9, 15, 6, 36, 27, 2, 18, 2, 7, 5, 18, 8, 47, 15, 10, 6, 18, 11, 6, 15, 64, 17, 8, 17, 6, 6, 5, 7, 2, 8, 2, 3, 1], 
		losses: [18, 29, 3, 5, 11, 30, 3, 17, 11, 7, 26, 30, 1, 25, 2, 5, 6, 21, 4, 25, 15, 2, 7, 12, 9, 7, 17, 63, 4, 5, 9, 0, 0, 2, 1, 0, 0, 0, 5, 2], 
		ties: [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins', 'Baltimore Colts', 'Brooklyn Dodgers', 'Buffalo Bills', 'Chicago Hornets', 'Dallas Texans', 'Los Angeles Dons', 'Miami Seahawks', 'New York Yankees', 'New York Yanks'],
		lossColor: '#AF1E2C',
		winColor: '#E6BE8A'	,
		tieColor: '#000000'
	}; 

	var cardinals = {
		teamName: 'Arizona Cardinals',
		wins: [15, 1, 4, 4, 27, 4, 13, 31, 1, 27, 22, 2, 7, 2, 3, 3, 10, 7, 14, 43, 2, 4, 56, 23, 4, 18, 16, 36, 9, 6, 45],
		losses: [13, 4, 6, 8, 58, 6, 33, 55, 8, 33, 46, 1, 8, 2, 8, 8, 13, 6, 13, 81, 6, 5, 55, 32, 9, 29, 16, 36, 9, 4, 75],
		ties: [],
		teams: ['Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		lossColor: '#870619',
		winColor: '#000000',
		tieColor: ''
	};

	var falcons = {
		teamName: 'Atlanta Falcons',
		wins: [13, 2, 7, 24, 12, 5, 3, 9, 5, 12, 12, 1, 2, 2, 3, 4, 10, 6, 48, 11, 6, 6, 12, 2, 8, 29, 5, 27, 22, 6, 8],
		losses: [15, 3, 4, 16, 14, 8, 11, 14, 8, 24, 15, 2, 13, 3, 5, 8, 16, 7, 43, 11, 5, 7, 15, 13, 1, 45, 9, 47, 21, 7, 14],
		ties: [],
		teams: ['Arizona Cardinals', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		lossColor: '#BD0D18',
		winColor: '#000000',
		tieColor: ''
	};

	var eagles = {
		teamName: "Philadelphia Eagles",
		wins: [55, 15, 2, 6, 6, 10, 3, 16, 48, 7, 16, 14, 4, 8, 2, 4, 6, 9, 6, 15, 77, 9, 6, 46, 4, 12, 7, 19, 8, 7, 74, 1, 7, 6, 3, 1, 2, 3, 1],
		losses: [56, 12, 1, 6, 2, 29, 8, 31, 60, 5, 13, 26, 0, 10, 3, 3, 7, 13, 5, 11, 83, 0, 5, 28, 7, 18, 7, 17, 5, 4, 81, 0, 2, 15, 0, 0, 0, 5, 2],
		ties: [5, 1, 1, 0, 0, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 0, 1, 0, 1, 0, 0, 6, 0, 0, 1, 0, 0, 0, 0, 1],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins', 'Baltimore Colts', 'Boston Yanks', 'Brooklyn Tigers', 'Cincinnati Reds', 'Dallas Texans', 'New York Yanks', 'New York Yankees', 'New York Yanks'],
		lossColor: '#000000',
		winColor: '#003B48',
		tieColor: '#708090'
	}

	angular
		.module('app.constants', [])
		.constant('titans', titans)
		.constant('niners', niners)
		.constant('cardinals', cardinals)
		.constant('falcons', falcons)
		.constant('eagles', eagles);


})();