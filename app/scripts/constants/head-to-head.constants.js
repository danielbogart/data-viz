(function() {
'use strict';

	var cardinals = {
		teamName: 'Arizona Cardinals',
		wins: [15, 1, 4, 4, 27, 4, 13, 31, 1, 27, 22, 2, 7, 2, 3, 3, 10, 7, 14, 43, 2, 4, 56, 23, 4, 18, 16, 36, 9, 6, 45],
		losses: [13, 4, 6, 8, 58, 6, 33, 55, 8, 33, 46, 1, 8, 2, 8, 8, 13, 6, 13, 81, 6, 5, 55, 32, 9, 29, 16, 36, 9, 4, 75],
		ties: [0, 0, 0, 0, 6, 0, 3, 1, 1, 5, 4, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 5, 3, 0, 0, 0, 2, 0, 0, 2],
		teams: ['Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#870619',
		lossColor: '#000000',
		tieColor: '#FFC20E'
	};

	var falcons = {
		teamName: 'Atlanta Falcons',
		wins: [13, 2, 7, 24, 12, 5, 3, 9, 5, 12, 12, 1, 2, 2, 3, 4, 10, 6, 48, 11, 6, 6, 12, 2, 8, 29, 5, 27, 22, 6, 8],
		losses: [15, 3, 4, 16, 14, 8, 11, 14, 8, 24, 15, 2, 13, 3, 5, 8, 16, 7, 43, 11, 5, 7, 15, 13, 1, 45, 9, 47, 21, 7, 14],
		ties: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 2, 0, 0, 1],
		teams: ['Arizona Cardinals', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#BD0D18',
		lossColor: '#000000',
		tieColor: '#DCE0E5'
	};

	var ravens = {
		teamName: "Baltimore Ravens",
		wins: [4, 3, 3, 2, 2, 20, 24, 4, 5, 3, 1, 6, 3, 8, 3, 5, 3, 1, 5, 3, 8, 6, 1, 17, 5, 3, 2, 3, 3, 9, 3],
		losses: [1, 2, 3, 3, 3, 18, 8, 0, 5, 1, 4, 2, 8, 10, 3, 5, 2, 7, 1, 1, 1, 1, 2, 21, 5, 1, 2, 2, 2, 9, 2],
		ties: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#280353',
		lossColor: '#000000',
		tieColor: '#D0B240'
	};

	var bills = {
		teamName: "Buffalo Bills",
		wins: [6, 4, 3, 5, 5, 15, 8, 3, 19, 5, 8, 3, 35, 7, 23, 40, 5, 42, 4, 6, 57, 17, 6, 8, 10, 5, 5, 6, 3, 14, 8],
		losses: [4, 7, 3, 1, 7, 11, 11, 6, 16, 4, 4, 4, 31, 5, 19, 57, 8, 66, 6, 5, 51, 20, 6, 13, 22, 6, 7, 5, 7, 27, 4],
		ties: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#00338D',
		lossColor: '#C60C30',
		tieColor: '#000000'
	};

	var panthers = {
		teamName: "Carolina Panthers",
		wins: [8, 16, 3, 1, 3, 2, 4, 1, 1, 5, 4, 1, 4, 2, 2, 1, 5, 3, 21, 4, 3, 3, 2, 1, 4, 11, 2, 11, 18, 1, 4],
		losses: [4, 24, 2, 5, 5, 2, 1, 9, 3, 2, 8, 2, 1, 3, 3, 4, 7, 2, 19, 4, 3, 2, 6, 5, 1, 7, 5, 8, 11, 3, 7],
		ties: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#000000',
		lossColor: '#0088CE',
		tieColor: '#A5ACAF'
	};

	var bears = {
		teamName: "Chicago Bears",
		wins: [58, 14, 3, 7, 5, 4, 6, 11, 7, 96, 92, 0, 19, 4, 6, 4, 50, 3, 13, 28, 8, 6, 29, 18, 6, 30, 4, 51, 37, 6, 20, 3, 3, 3, 10, 4, 2, 1, 2, 2, 2, 1, 1, 2, 1, 4, 2, 1, 0, 2, 7, 3, 1, 1, 3, 1, 5, 1, 2, 3, 2, 0, 2, 2, 8, 1, 1, 1],
		losses: [27, 12, 2, 5, 3, 6, 9, 12, 7, 69, 90, 3, 22, 2, 5, 8, 55, 9, 14, 19, 3, 7, 10, 7, 5, 29, 10, 35, 18, 5, 20, 0, 0, 0, 0, 2, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 2, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0],
		ties: [6, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 1, 1, 0, 1, 0, 3, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, 4, 0, 1, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins', 'Akron Indians', 'Boston Bulldogs', 'Boston Yanks', 'Brooklyn Tigers', 'Buffalo Bisons', 'Canton Bulldogs', 'Champaign Legion', 'Chicago Tigers', 'Cincinnati Reds', 'Cleveland Bulldogs', 'Cleveland Indians', 'Cleveland Indians', 'Columbus Tigers', 'Dallas Texans', 'Dayton Triangles', 'Detroit Panthers', 'Detroit Tigers', 'Detroit Wolverines', 'Duluth Eskimos', 'Frankford Yellow Jackets', 'Hammond Pros', 'Kewanee Walworths', 'Louisville Colonels', 'Milwaukee Badgers', 'Minneapolis Marines', 'Minneapolis Red Jackets', 'Moline Universal Tractors', 'New York Yankees', 'New York Yanks', 'Oorang Indians', 'Providence Steam Roller', 'Racine Tornadoes', 'Rochester Jeffersons', 'Rock Island Independents', 'Rockford A.C.', 'Staten Island Stapletons', 'Toledo Maroons'],
		winColor: '#03202F',
		lossColor: '#DD4814',
		tieColor: '#000000'
	};

	var bengals = {
		teamName: "Cincinnati Bengals",
		wins: [6, 8, 18, 11, 2, 6, 44, 4, 9, 8, 7, 4, 10, 9, 14, 5, 6, 9, 7, 6, 8, 9, 8, 34, 13, 3, 9, 7, 4, 33, 5],
		losses: [4, 5, 20, 15, 2, 4, 39, 7, 19, 3, 5, 3, 17, 11, 13, 15, 6, 15, 6, 3, 15, 18, 3, 55, 19, 9, 9, 5, 7, 39, 4],
		ties: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#000000',
		lossColor: '#FB4F14',
		tieColor: '#8A8D8F'
	};

	var browns = {
		teamName: "Cleveland Browns",
		wins: [33, 11, 8, 11, 1, 9, 39, 15, 5, 4, 7, 3, 14, 5, 11, 8, 4, 12, 13, 26, 12, 10, 31, 58, 8, 17, 6, 9, 6, 34, 33, 7, 6, 6, 8, 6, 2, 7],
		losses: [13, 3, 24, 8, 4, 6, 44, 12, 19, 15, 11, 5, 14, 11, 11, 8, 10, 10, 4, 20, 9, 11, 16, 66, 14, 9, 11, 10, 3, 28, 11, 0, 0, 0, 0, 2, 0, 0],
		ties: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 1],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins', 'Baltimore Colts', 'Brooklyn Dodgers', 'Buffalo Bills', 'Chicago Hornets', 'Los Angeles Dons', 'Miami Seahawks', 'New York Yankees'],
		winColor: '#26201E',
		lossColor: '#E34912',
		tieColor: '#000000'
	};

	var cowboys = {
		teamName: "Dallas Cowboys",
		wins: [55, 14, 0, 6, 9, 12, 7, 12, 4, 12, 12, 3, 10, 3, 6, 5, 11, 7, 16, 61, 7, 5, 60, 15, 6, 11, 10, 13, 11, 8, 65],
		losses: [31, 9, 4, 3, 1, 11, 4, 15, 7, 11, 13, 1, 5, 3, 4, 7, 11, 4, 11, 42, 3, 6, 48, 13, 4, 15, 5, 11, 3, 6, 41],
		ties: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#002244',
		lossColor: '#8C8B8A',
		tieColor: '#000000'
	};

	var broncos = {
		teamName: "Denver Broncos",
		wins: [8, 8, 5, 16, 3, 7, 19, 19, 7, 6, 5, 3, 12, 4, 53, 5, 6, 25, 8, 6, 18, 48, 5, 14, 60, 7, 34, 5, 6, 15, 7],
		losses: [1, 5, 5, 19, 1, 7, 9, 5, 4, 5, 6, 2, 9, 5, 56, 11, 7, 20, 2, 5, 15, 59, 7, 7, 49, 6, 19, 8, 2, 21, 5],
		ties: [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 0, 1, 1, 0, 0, 0, 0, 1, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#FB4F14',
		lossColor: '#002244',
		tieColor: '#000000'
	};

	var lions = {
		teamName: "Detroit Lions",
		wins: [33, 24, 1, 4, 2, 69, 3, 15, 11, 5, 67, 1, 18, 2, 5, 4, 36, 4, 10, 21, 7, 5, 13, 14, 4, 26, 5, 39, 30, 3, 13, 1, 3, 12, 2, 2, 2, 3, 1, 3, 1, 1, 3],
		losses: [27, 12, 3, 5, 5, 96, 8, 4, 12, 6, 95, 2, 21, 3, 7, 7, 69, 7, 11, 20, 6, 6, 16, 16, 6, 36, 7, 42, 26, 8, 27, 0, 2, 3, 1, 0, 0, 1, 1, 1, 0, 0, 0],
		ties: [5, 0, 0, 1, 0, 5, 0, 0, 0, 0, 7, 0, 2, 0, 0, 0, 2, 0, 1, 1, 0, 0, 2, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins', 'Baltimore Colts', 'Boston Yanks', 'Brooklyn Tigers', 'Cincinnati Reds', 'Cleveland Indians', 'Dallas Texans', 'Frankford Yellow Jackets', 'Minneapolis Red Jackets', 'New York Yanks', 'Newark Tornadoes', 'St. Louis Gunners', 'Staten Island Stapletons'],
		winColor: '#006DB0',
		lossColor: '#C5C7CF',
		tieColor: '#000000'
	};

	var packers = {
		teamName: "Green Bay Packers",
		wins: [46, 15, 4, 4, 8, 90, 5, 11, 13, 6, 95, 2, 20, 3, 2, 4, 57, 5, 16, 27, 4, 6, 26, 18, 9, 30, 8, 44, 31, 5, 18, 0, 1, 3, 10, 1, 1, 1, 1, 2, 5, 2, 3, 1, 5, 3, 2, 1, 9, 8, 1, 2, 4, 4, 1, 1, 1, 1, 4],
		losses: [22, 12, 1, 8, 4, 92, 7, 7, 12, 5, 67, 1, 21, 2, 7, 10, 48, 5, 8, 23, 8, 5, 14, 15, 1, 27, 7, 45, 21, 6, 13, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 0, 0],
		ties: [4, 0, 0, 0, 0, 6, 0, 0, 0, 1, 7, 0, 1, 0, 1, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins', 'Baltimore Colts', 'Boston Bulldogs', 'Boston Yanks', 'Brooklyn Tigers', 'Cincinnati Reds', 'Cleveland Bulldogs', 'Cleveland Indians', 'Columbus Tigers', 'Dallas Texans', 'Dayton Triangles', 'Detroit Panthers', 'Duluth Eskimos', 'Evansville Crimson Giants', 'Frankford Yellow Jackets', 'Hammond Pros', 'Kansas City Cowboys', 'Louisville Colonels', 'Milwaukee Badgers', 'Minneapolis Red Jackets', 'New York Yankees', 'New York Yanks', 'Providence Steam Roller', 'Racine Tornadoes', 'Rochester Jeffersons', 'Rock Island Independents', 'St. Louis All-Stars', 'St. Louis Gunners', 'Staten Island Stapletons'],
		winColor: '#213D30',
		lossColor: '#FFCC00',
		tieColor: '#000000'
	};

	var texans = {
		teamName: "Houston Texans",
		wins: [1, 2, 2, 4, 2, 3, 3, 5, 1, 2, 2, 1, 4, 15, 3, 7, 0, 1, 1, 1, 1, 6, 0, 2, 1, 1, 1, 1, 2, 11, 2],
		losses: [2, 1, 6, 3, 1, 0, 4, 3, 3, 3, 1, 2, 22, 11, 3, 0, 3, 4, 2, 3, 5, 3, 4, 3, 4, 2, 2, 2, 1, 15, 2],
		ties: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#02253A',
		lossColor: '#B31B34',
		tieColor: '#000000'
	};

	var colts = {
		teamName: "Indianapolis Colts",
		wins: [8, 13, 8, 31, 1, 22, 17, 14, 5, 9, 21, 21, 22, 20, 12, 25, 15, 28, 5, 9, 40, 6, 10, 6, 9, 25, 7, 23, 7, 27, 20],
		losses: [7, 2, 3, 35, 4, 19, 10, 14, 10, 12, 18, 20, 4, 8, 8, 45, 7, 46, 6, 6, 27, 7, 8, 15, 16, 18, 4, 18, 5, 13, 10],
		ties: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#C0C0C0',
		lossColor: '#003B7B',
		tieColor: '#000000'
	};

	var jaguars = {
		teamName: "Jacksonville Jaguars",
		wins: [2, 3, 10, 5, 3, 2, 11, 11, 3, 5, 3, 2, 11, 8, 6, 2, 1, 0, 2, 3, 6, 4, 3, 11, 2, 2, 2, 1, 4, 18, 1],
		losses: [2, 2, 8, 7, 2, 4, 9, 5, 3, 4, 2, 3, 15, 20, 4, 4, 4, 6, 3, 3, 4, 3, 2, 11, 5, 2, 5, 3, 1, 22, 5],
		ties: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#000000',
		lossColor: '#D0B239',
		tieColor: '#00719'
	};

	var chiefs = {
		teamName: "Kansas City Chiefs",
		wins: [8, 5, 3, 19, 3, 5, 13, 11, 4, 56, 7, 7, 3, 8, 4, 13, 6, 17, 5, 3, 17, 56, 3, 9, 54, 5, 33, 7, 5, 27, 8],
		losses: [3, 3, 3, 23, 2, 6, 14, 11, 6, 53, 5, 2, 3, 12, 6, 13, 4, 13, 5, 10, 17, 51, 4, 20, 54, 7, 18, 4, 6, 21, 1],
		ties: [1, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 1, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#B20032',
		lossColor: '#F2C800',
		tieColor: '#000000'
	};

	var dolphins = {
		teamName: "Miami Dolphins",
		wins: [8, 8, 5, 57, 4, 8, 15, 8, 7, 11, 7, 10, 0, 45, 4, 13, 7, 51, 6, 2, 46, 16, 7, 10, 14, 6, 8, 10, 5, 18, 7],
		losses: [3, 4, 5, 40, 1, 4, 5, 8, 5, 5, 4, 4, 7, 25, 2, 13, 4, 45, 5, 5, 51, 16, 6, 12, 12, 5, 3, 2, 5, 15, 4],
		ties: [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#008D97',
		lossColor: '#015679',
		tieColor: '#F5811F'
	};

	var vikings = {
		teamName: "Minnesota Vikings",
		wins: [13, 16, 2, 8, 7, 55, 6, 10, 11, 7, 69, 48, 3, 7, 4, 4, 4, 4, 18, 13, 2, 4, 13, 9, 5, 21, 5, 20, 32, 8, 10],
		losses: [10, 10, 3, 5, 5, 50, 6, 4, 11, 6, 36, 57, 0, 15, 1, 6, 7, 8, 10, 10, 8, 9, 9, 7, 6, 18, 8, 14, 22, 4, 9],
		ties: [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#4F2682',
		lossColor: '#FFC52F',
		tieColor: '#000000'
	};

	var patriots = {
		teamName: "New England Patriots",
		wins: [6, 7, 7, 66, 2, 9, 15, 10, 4, 20, 7, 5, 4, 46, 6, 13, 45, 8, 9, 5, 56, 16, 5, 9, 21, 4, 8, 6, 6, 22, 3],
		losses: [7, 6, 1, 42, 3, 3, 9, 12, 7, 25, 4, 5, 1, 28, 0, 17, 51, 4, 4, 4, 52, 14, 6, 14, 14, 8, 8, 5, 2, 15, 6],
		ties: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 0, 1, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#0D254C',
		lossColor: '#D6D6D6',
		tieColor: '#C80815'
	};

	var saints = {
		teamName: "New Orleans Saints",
		wins: [13, 43, 1, 6, 19, 14, 6, 4, 11, 2, 11, 8, 2, 6, 3, 5, 5, 10, 4, 12, 6, 6, 11, 8, 4, 25, 6, 31, 29, 5, 8],
		losses: [14, 48, 5, 4, 21, 13, 7, 13, 16, 8, 10, 16, 1, 5, 2, 5, 6, 18, 9, 15, 6, 5, 15, 7, 7, 47, 6, 40, 17, 7, 16],
		ties: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#D2B887',
		lossColor: '#000000',
		tieColor: '#8A8D8F'
	};

	var giants = {
		teamName: "New York Giants",
		wins: [81, 11, 1, 5, 4, 19, 3, 20, 42, 5, 20, 23, 3, 6, 3, 10, 5, 10, 4, 15, 8, 5, 83, 44, 5, 15, 9, 15, 12, 6, 96, 1, 4, 5, 2, 22, 2, 0, 1, 1, 1, 1, 0, 2, 8, 1, 2, 0, 3, 4, 3, 10, 1, 5],
		losses: [43, 11, 3, 6, 4, 28, 6, 26, 61, 6, 21, 27, 1, 9, 3, 3, 2, 13, 5, 12, 4, 7, 77, 29, 6, 15, 8, 25, 6, 5, 64, 0, 0, 1, 0, 5, 0, 0, 1, 0, 0, 0, 1, 0, 5, 0, 0, 1, 2, 1, 0, 2, 0, 2],
		ties: [2, 0, 0, 0, 0, 2, 0, 2, 2, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 4, 0, 0, 3, 0, 3, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins', 'Baltimore Colts', 'Boston Bulldogs', 'Boston Yanks', 'Brooklyn Lions', 'Brooklyn Tigers', 'Buffalo Bisons', 'Canton Bulldogs', 'Cleveland Bulldogs', 'Columbus Tigers', 'Dallas Texans', 'Dayton Triangles', 'Detroit Wolverines', 'Duluth Eskimos', 'Frankford Yellow Jackets', 'Hartford Blues', 'Kansas City Cowboys', 'Los Angeles Buccaneers', 'New York Yankees', 'New York Yanks', 'Newark Tornadoes', 'Providence Steam Roller', 'Rochester Jeffersons', 'Staten Island Stapletons'],
		winColor: '#192F6B',
		lossColor: '#CA001A',
		tieColor: '#808080'
	};

	var jets = {
		teamName: "New York Jets",
		wins: [6, 5, 1, 51, 3, 3, 15, 9, 3, 15, 6, 8, 5, 27, 4, 17, 51, 8, 52, 6, 4, 17, 0, 5, 12, 2, 8, 4, 10, 18, 2],
		losses: [2, 6, 8, 57, 3, 8, 8, 12, 7, 18, 7, 4, 1, 40, 6, 17, 46, 2, 56, 6, 8, 21, 9, 17, 21, 10, 10, 9, 1, 23, 8],
		ties: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#0C371D',
		lossColor: '#000000',
		tieColor: '#808080'
	};

	var raiders = {
		teamName: "Oakland Raiders",
		wins: [5, 7, 1, 20, 2, 7, 18, 11, 6, 59, 6, 5, 3, 7, 3, 51, 16, 9, 14, 5, 7, 21, 5, 12, 58, 7, 28, 8, 6, 23, 7],
		losses: [4, 6, 6, 17, 3, 6, 9, 10, 5, 48, 5, 6, 6, 6, 4, 56, 16, 4, 16, 6, 5, 17, 6, 9, 50, 6, 24, 5, 2, 20, 5],
		ties: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 1, 0, 1, 1, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#C4C8CB',
		lossColor: '#000000',
		tieColor: '#808080'
	};

	var eagles = {
		teamName: "Philadelphia Eagles",
		wins: [55, 15, 2, 6, 6, 10, 3, 16, 48, 7, 16, 14, 4, 8, 2, 4, 6, 9, 6, 15, 77, 9, 6, 46, 4, 12, 7, 19, 8, 7, 74, 1, 7, 6, 3, 1, 2, 3, 1],
		losses: [56, 12, 1, 6, 2, 29, 8, 31, 60, 5, 13, 26, 0, 10, 3, 3, 7, 13, 5, 11, 83, 0, 5, 28, 7, 18, 7, 17, 5, 4, 81, 0, 2, 15, 0, 0, 0, 5, 2],
		ties: [5, 1, 1, 0, 0, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 0, 1, 0, 1, 0, 0, 6, 0, 0, 1, 0, 0, 0, 0, 1],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins', 'Baltimore Colts', 'Boston Yanks', 'Brooklyn Tigers', 'Cincinnati Reds', 'Dallas Texans', 'New York Yanks', 'New York Yankees', 'New York Yanks'],
		winColor: '#003B48',
		lossColor: '#000000',
		tieColor: '#708090'
	};

	var steelers = {
		teamName: "Pittsburgh Steelers",
		wins: [32, 13, 21, 13, 5, 7, 55, 66, 13, 7, 16, 15, 3, 15, 11, 20, 12, 7, 14, 7, 29, 17, 9, 28, 21, 9, 8, 7, 8, 42, 32, 1, 5, 8, 2, 2, 0],
		losses: [23, 2, 17, 8, 1, 18, 34, 58, 15, 14, 14, 18, 2, 6, 11, 9, 10, 9, 9, 8, 44, 5, 12, 46, 7, 11, 8, 15, 2, 31, 42, 0, 3, 11, 0, 0, 1],
		ties: [3, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 2, 0, 0, 3, 0, 0, 1, 1, 0, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins', 'Baltimore Colts', 'Boston Yanks', 'Brooklyn Tigers', 'Cincinnati Reds', 'New York Yanks', 'St. Louis Gunners'],
		winColor: '#000000',
		lossColor: '#F2C800',
		tieColor: '#BA0C2F'
	};

	var chargers = {
		teamName: "San Diego Chargers",
		wins: [9, 1, 5, 22, 1, 5, 19, 14, 4, 49, 6, 1, 4, 16, 5, 54, 12, 6, 14, 7, 6, 21, 50, 7, 7, 7, 24, 5, 8, 25, 3],
		losses: [4, 8, 5, 10, 4, 6, 13, 8, 6, 60, 4, 9, 1, 9, 2, 54, 14, 5, 21, 4, 5, 12, 58, 4, 21, 6, 26, 6, 2, 14, 7],
		ties: [0, 0, 0, 2, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#08214A',
		lossColor: '#EEC607',
		tieColor: '#5B92E5'
	};
	
	var niners = {
		teamName: 'San Francisco 49ers',
		wins: [29, 45, 1, 6, 7, 29, 9, 9, 15, 6, 36, 27, 2, 18, 2, 7, 5, 18, 8, 47, 15, 10, 6, 18, 11, 6, 15, 64, 17, 8, 17, 6, 6, 5, 7, 2, 8, 2, 3, 1], 
		losses: [18, 29, 3, 5, 11, 30, 3, 17, 11, 7, 26, 30, 1, 25, 2, 5, 6, 21, 4, 25, 15, 2, 7, 12, 9, 7, 17, 63, 4, 5, 9, 0, 0, 2, 1, 0, 0, 0, 5, 2], 
		ties: [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins', 'Baltimore Colts', 'Brooklyn Dodgers', 'Buffalo Bills', 'Chicago Hornets', 'Dallas Texans', 'Los Angeles Dons', 'Miami Seahawks', 'New York Yankees', 'New York Yanks'],
		winColor: '#E6BE8A',
		lossColor: '#AF1E2C',
		tieColor: '#000000'
	}; 

	var seahawks = {
		teamName: "Seattle Seahawks",
		wins: [16, 9, 2, 7, 5, 10, 9, 11, 5, 19, 7, 7, 2, 4, 5, 18, 3, 8, 8, 6, 8, 10, 24, 7, 8, 26, 17, 21, 8, 10, 5],
		losses: [ 16, 5, 2, 5, 2, 4, 9, 6, 10, 34, 5, 8, 1, 7, 2, 33, 8, 5, 8, 6, 9, 8, 28, 7, 8, 24, 15, 12, 4, 5, 11],
		ties: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#06192E',
		lossColor: '#4EAE47',
		tieColor: '#ACB6BC'
	};

	var rams = {
		teamName: "St. Louis Rams",
		wins: [36, 47, 2, 5, 8, 35, 5, 10, 11, 8, 42, 45, 2, 18, 3, 4, 2, 14, 5, 40, 25, 9, 5, 17, 15, 6, 63, 12, 12, 6, 11, 1, 1, 1, 2, 5],
		losses: [36, 27, 3, 6, 11, 51, 7, 9, 13, 5, 39, 44, 1, 23, 1, 7, 10, 20, 6, 31, 15, 4, 8, 19, 7, 5, 64, 21, 8, 5, 22, 0, 2, 3, 0, 0],
		ties: [2, 2, 0, 0, 0, 3, 0, 0, 0, 0, 1, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 2, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins', 'Baltimore Colts', 'Boston Yanks', 'Brooklyn Tigers', 'Dallas Texans', 'New York Yanks'],
		winColor: '#13264B',
		lossColor: '#C9AF74',
		tieColor: '#000000'
	};

	var buccaneers = {
		teamName: "Tamp Bay Buccaneers",
		wins: [9, 21, 2, 7, 11, 18, 7, 3, 3, 2, 26, 21, 1, 5, 1, 6, 5, 22, 2, 17, 6, 1, 2, 5, 2, 2, 4, 4, 8, 2, 10],
		losses: [9, 22, 3, 3, 18, 37, 4, 6, 11, 6, 30, 31, 2, 7, 4, 5, 5, 32, 6, 29, 12, 10, 6, 8, 8, 8, 17, 8, 12, 8, 9],
		ties: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tennessee Titans', 'Washington Redskins'],
		winColor: '#D60A0B',
		lossColor: '#89765F',
		tieColor: '#000000'
	};

	var titans = {
		teamName: 'Tennessee Titans',
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Washington Redskins'],
		wins: [4, 7, 9, 27, 3, 5, 39, 28, 6, 21, 8, 6, 15, 13, 22, 21, 15, 4, 15, 7, 5, 23, 20, 4, 31, 14, 5, 5, 5, 8, 6],
		losses: [6, 6, 9, 14, 1, 6, 33, 34, 8, 15, 3, 5, 11, 27, 18, 27, 18, 8, 22, 5, 6, 18, 23, 7, 42, 25, 8, 10, 6, 2, 6],
		ties: [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
		winColor: "#FF0000",
		lossColor: "#648FCC",
		tieColor: '#C0C0C0'
	};

	var redskins = {
		teamName: "Washington Redskins",
		wins: [75, 14, 2, 4, 7, 20, 4, 11, 41, 5, 27, 13, 2, 10, 5, 1, 4, 9, 6, 16, 64, 8, 5, 81, 42, 7, 9, 11, 22, 9, 6, 2, 8, 17, 1, 1],
		losses: [45, 8, 3, 8, 4, 20, 5, 33, 65, 7, 13, 18, 2, 20, 1, 8, 7, 10, 3, 8, 96, 2, 7, 74, 32, 3, 17, 5, 11, 10, 6, 0, 2, 5, 0, 0],
		ties: [2, 1, 0, 0, 0, 1, 0, 1, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 6, 3, 0, 1, 0, 1, 0, 0, 0, 0, 3, 1, 0],
		teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Baltimore Colts', 'Boston Yanks', 'Brooklyn Tigers', 'New York Yanks', 'Staten Island Stapletons'],
		winColor: '#773141',
		lossColor: '#FFB612',
		tieColor: '#000000'
	};

	angular
		.module('app.constants', [])
		.constant('cardinals', cardinals)
		.constant('falcons', falcons)
		.constant('ravens', ravens)
		.constant('bills', bills)
		.constant('panthers', panthers)
		.constant('bears', bears)
		.constant('bengals', bengals)
		.constant('browns', browns)
		.constant('cowboys', cowboys)
		.constant('broncos', broncos)
		.constant('lions', lions)
		.constant('packers', packers)
		.constant('texans', texans)
		.constant('colts', colts)
		.constant('jaguars', jaguars)
		.constant('chiefs', chiefs)
		.constant('dolphins', dolphins)
		.constant('vikings', vikings)
		.constant('patriots', patriots)
		.constant('saints', saints)
		.constant('giants', giants)
		.constant('jets', jets)
		.constant('raiders', raiders)
		.constant('eagles', eagles)
		.constant('steelers', steelers)
		.constant('chargers', chargers)
		.constant('niners', niners)
		.constant('seahawks', seahawks)
		.constant('rams', rams)
		.constant('buccaneers', buccaneers)
		.constant('titans', titans)
		.constant('redskins', redskins);
})();