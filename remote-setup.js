// --- FULL LIST OF AVAILABLE ITEMS ---
const ALL_AVAILABLE_ITEMS = [
  { id: 'weather-local', league: 'weather', name: 'Local Weather' },
  { id: 'nfl-ARI', sport: 'football', league: 'nfl', abbr: 'ARI', name: 'Arizona Cardinals' },
  { id: 'nfl-ATL', sport: 'football', league: 'nfl', abbr: 'ATL', name: 'Atlanta Falcons' },
  { id: 'nfl-BAL', sport: 'football', league: 'nfl', abbr: 'BAL', name: 'Baltimore Ravens' },
  { id: 'nfl-BUF', sport: 'football', league: 'nfl', abbr: 'BUF', name: 'Buffalo Bills' },
  { id: 'nfl-CAR', sport: 'football', league: 'nfl', abbr: 'CAR', name: 'Carolina Panthers' },
  { id: 'nfl-CHI', sport: 'football', league: 'nfl', abbr: 'CHI', name: 'Chicago Bears' },
  { id: 'nfl-CIN', sport: 'football', league: 'nfl', abbr: 'CIN', name: 'Cincinnati Bengals' },
  { id: 'nfl-CLE', sport: 'football', league: 'nfl', abbr: 'CLE', name: 'Cleveland Browns' },
  { id: 'nfl-DAL', sport: 'football', league: 'nfl', abbr: 'DAL', name: 'Dallas Cowboys' },
  { id: 'nfl-DEN', sport: 'football', league: 'nfl', abbr: 'DEN', name: 'Denver Broncos' },
  { id: 'nfl-DET', sport: 'football', league: 'nfl', abbr: 'DET', name: 'Detroit Lions' },
  { id: 'nfl-GB', sport: 'football', league: 'nfl', abbr: 'GB', name: 'Green Bay Packers' },
  { id: 'nfl-HOU', sport: 'football', league: 'nfl', abbr: 'HOU', name: 'Houston Texans' },
  { id: 'nfl-IND', sport: 'football', league: 'nfl', abbr: 'IND', name: 'Indianapolis Colts' },
  { id: 'nfl-JAX', sport: 'football', league: 'nfl', abbr: 'JAX', name: 'Jacksonville Jaguars' },
  { id: 'nfl-KC', sport: 'football', league: 'nfl', abbr: 'KC', name: 'Kansas City Chiefs' },
  { id: 'nfl-LV', sport: 'football', league: 'nfl', abbr: 'LV', name: 'Las Vegas Raiders' },
  { id: 'nfl-LAC', sport: 'football', league: 'nfl', abbr: 'LAC', name: 'Los Angeles Chargers' },
  { id: 'nfl-LAR', sport: 'football', league: 'nfl', abbr: 'LAR', name: 'Los Angeles Rams' },
  { id: 'nfl-MIA', sport: 'football', league: 'nfl', abbr: 'MIA', name: 'Miami Dolphins' },
  { id: 'nfl-MIN', sport: 'football', league: 'nfl', abbr: 'MIN', name: 'Minnesota Vikings' },
  { id: 'nfl-NE', sport: 'football', league: 'nfl', abbr: 'NE', name: 'New England Patriots' },
  { id: 'nfl-NO', sport: 'football', league: 'nfl', abbr: 'NO', name: 'New Orleans Saints' },
  { id: 'nfl-NYG', sport: 'football', league: 'nfl', abbr: 'NYG', name: 'New York Giants' },
  { id: 'nfl-NYJ', sport: 'football', league: 'nfl', abbr: 'NYJ', name: 'New York Jets' },
  { id: 'nfl-PHI', sport: 'football', league: 'nfl', abbr: 'PHI', name: 'Philadelphia Eagles' },
  { id: 'nfl-PIT', sport: 'football', league: 'nfl', abbr: 'PIT', name: 'Pittsburgh Steelers' },
  { id: 'nfl-SF', sport: 'football', league: 'nfl', abbr: 'SF', name: 'San Francisco 49ers' },
  { id: 'nfl-SEA', sport: 'football', league: 'nfl', abbr: 'SEA', name: 'Seattle Seahawks' },
  { id: 'nfl-TB', sport: 'football', league: 'nfl', abbr: 'TB', name: 'Tampa Bay Buccaneers' },
  { id: 'nfl-TEN', sport: 'football', league: 'nfl', abbr: 'TEN', name: 'Tennessee Titans' },
  { id: 'nfl-WSH', sport: 'football', league: 'nfl', abbr: 'WSH', name: 'Washington Commanders' },
  { id: 'mlb-ARI', sport: 'baseball', league: 'mlb', abbr: 'ARI', name: 'Arizona Diamondbacks' },
  { id: 'mlb-ATH', sport: 'baseball', league: 'mlb', abbr: 'ATH', name: 'Athletics' },
  { id: 'mlb-ATL', sport: 'baseball', league: 'mlb', abbr: 'ATL', name: 'Atlanta Braves' },
  { id: 'mlb-BAL', sport: 'baseball', league: 'mlb', abbr: 'BAL', name: 'Baltimore Orioles' },
  { id: 'mlb-BOS', sport: 'baseball', league: 'mlb', abbr: 'BOS', name: 'Boston Red Sox' },
  { id: 'mlb-CHC', sport: 'baseball', league: 'mlb', abbr: 'CHC', name: 'Chicago Cubs' },
  { id: 'mlb-CHW', sport: 'baseball', league: 'mlb', abbr: 'CHW', name: 'Chicago White Sox' },
  { id: 'mlb-CIN', sport: 'baseball', league: 'mlb', abbr: 'CIN', name: 'Cincinnati Reds' },
  { id: 'mlb-CLE', sport: 'baseball', league: 'mlb', abbr: 'CLE', name: 'Cleveland Guardians' },
  { id: 'mlb-COL', sport: 'baseball', league: 'mlb', abbr: 'COL', name: 'Colorado Rockies' },
  { id: 'mlb-DET', sport: 'baseball', league: 'mlb', abbr: 'DET', name: 'Detroit Tigers' },
  { id: 'mlb-HOU', sport: 'baseball', league: 'mlb', abbr: 'HOU', name: 'Houston Astros' },
  { id: 'mlb-KC', sport: 'baseball', league: 'mlb', abbr: 'KC', name: 'Kansas City Royals' },
  { id: 'mlb-LAA', sport: 'baseball', league: 'mlb', abbr: 'LAA', name: 'Los Angeles Angels' },
  { id: 'mlb-LAD', sport: 'baseball', league: 'mlb', abbr: 'LAD', name: 'Los Angeles Dodgers' },
  { id: 'mlb-MIA', sport: 'baseball', league: 'mlb', abbr: 'MIA', name: 'Miami Marlins' },
  { id: 'mlb-MIL', sport: 'baseball', league: 'mlb', abbr: 'MIL', name: 'Milwaukee Brewers' },
  { id: 'mlb-MIN', sport: 'baseball', league: 'mlb', abbr: 'MIN', name: 'Minnesota Twins' },
  { id: 'mlb-NYM', sport: 'baseball', league: 'mlb', abbr: 'NYM', name: 'New York Mets' },
  { id: 'mlb-NYY', sport: 'baseball', league: 'mlb', abbr: 'NYY', name: 'New York Yankees' },
  { id: 'mlb-PHI', sport: 'baseball', league: 'mlb', abbr: 'PHI', name: 'Philadelphia Phillies' },
  { id: 'mlb-PIT', sport: 'baseball', league: 'mlb', abbr: 'PIT', name: 'Pittsburgh Pirates' },
  { id: 'mlb-SD', sport: 'baseball', league: 'mlb', abbr: 'SD', name: 'San Diego Padres' },
  { id: 'mlb-SF', sport: 'baseball', league: 'mlb', abbr: 'SF', name: 'San Francisco Giants' },
  { id: 'mlb-SEA', sport: 'baseball', league: 'mlb', abbr: 'SEA', name: 'Seattle Mariners' },
  { id: 'mlb-STL', sport: 'baseball', league: 'mlb', abbr: 'STL', name: 'St. Louis Cardinals' },
  { id: 'mlb-TB', sport: 'baseball', league: 'mlb', abbr: 'TB', name: 'Tampa Bay Rays' },
  { id: 'mlb-TEX', sport: 'baseball', league: 'mlb', abbr: 'TEX', name: 'Texas Rangers' },
  { id: 'mlb-TOR', sport: 'baseball', league: 'mlb', abbr: 'TOR', name: 'Toronto Blue Jays' },
  { id: 'mlb-WSH', sport: 'baseball', league: 'mlb', abbr: 'WSH', name: 'Washington Nationals' },
  { id: 'nba-ATL', sport: 'basketball', league: 'nba', abbr: 'ATL', name: 'Atlanta Hawks' },
  { id: 'nba-BOS', sport: 'basketball', league: 'nba', abbr: 'BOS', name: 'Boston Celtics' },
  { id: 'nba-BKN', sport: 'basketball', league: 'nba', abbr: 'BKN', name: 'Brooklyn Nets' },
  { id: 'nba-CHA', sport: 'basketball', league: 'nba', abbr: 'CHA', name: 'Charlotte Hornets' },
  { id: 'nba-CHI', sport: 'basketball', league: 'nba', abbr: 'CHI', name: 'Chicago Bulls' },
  { id: 'nba-CLE', sport: 'basketball', league: 'nba', abbr: 'CLE', name: 'Cleveland Cavaliers' },
  { id: 'nba-DAL', sport: 'basketball', league: 'nba', abbr: 'DAL', name: 'Dallas Mavericks' },
  { id: 'nba-DEN', sport: 'basketball', league: 'nba', abbr: 'DEN', name: 'Denver Nuggets' },
  { id: 'nba-DET', sport: 'basketball', league: 'nba', abbr: 'DET', name: 'Detroit Pistons' },
  { id: 'nba-GS', sport: 'basketball', league: 'nba', abbr: 'GS', name: 'Golden State Warriors' },
  { id: 'nba-HOU', sport: 'basketball', league: 'nba', abbr: 'HOU', name: 'Houston Rockets' },
  { id: 'nba-IND', sport: 'basketball', league: 'nba', abbr: 'IND', name: 'Indiana Pacers' },
  { id: 'nba-LAC', sport: 'basketball', league: 'nba', abbr: 'LAC', name: 'Los Angeles Clippers' },
  { id: 'nba-LAL', sport: 'basketball', league: 'nba', abbr: 'LAL', name: 'Los Angeles Lakers' },
  { id: 'nba-MEM', sport: 'basketball', league: 'nba', abbr: 'MEM', name: 'Memphis Grizzlies' },
  { id: 'nba-MIA', sport: 'basketball', league: 'nba', abbr: 'MIA', name: 'Miami Heat' },
  { id: 'nba-MIL', sport: 'basketball', league: 'nba', abbr: 'MIL', name: 'Milwaukee Bucks' },
  { id: 'nba-MIN', sport: 'basketball', league: 'nba', abbr: 'MIN', name: 'Minnesota Timberwolves' },
  { id: 'nba-NO', sport: 'basketball', league: 'nba', abbr: 'NO', name: 'New Orleans Pelicans' },
  { id: 'nba-NY', sport: 'basketball', league: 'nba', abbr: 'NY', name: 'New York Knicks' },
  { id: 'nba-OKC', sport: 'basketball', league: 'nba', abbr: 'OKC', name: 'Oklahoma City Thunder' },
  { id: 'nba-ORL', sport: 'basketball', league: 'nba', abbr: 'ORL', name: 'Orlando Magic' },
  { id: 'nba-PHI', sport: 'basketball', league: 'nba', abbr: 'PHI', name: 'Philadelphia 76ers' },
  { id: 'nba-PHX', sport: 'basketball', league: 'nba', abbr: 'PHX', name: 'Phoenix Suns' },
  { id: 'nba-POR', sport: 'basketball', league: 'nba', abbr: 'POR', name: 'Portland Trail Blazers' },
  { id: 'nba-SAC', sport: 'basketball', league: 'nba', abbr: 'SAC', name: 'Sacramento Kings' },
  { id: 'nba-SA', sport: 'basketball', league: 'nba', abbr: 'SA', name: 'San Antonio Spurs' },
  { id: 'nba-TOR', sport: 'basketball', league: 'nba', abbr: 'TOR', name: 'Toronto Raptors' },
  { id: 'nba-UTA', sport: 'basketball', league: 'nba', abbr: 'UTA', name: 'Utah Jazz' },
  { id: 'nba-WSH', sport: 'basketball', league: 'nba', abbr: 'WSH', name: 'Washington Wizards' },
  { id: 'nhl-ANA', sport: 'hockey', league: 'nhl', abbr: 'ANA', name: 'Anaheim Ducks' },
  { id: 'nhl-BOS', sport: 'hockey', league: 'nhl', abbr: 'BOS', name: 'Boston Bruins' },
  { id: 'nhl-BUF', sport: 'hockey', league: 'nhl', abbr: 'BUF', name: 'Buffalo Sabres' },
  { id: 'nhl-CGY', sport: 'hockey', league: 'nhl', abbr: 'CGY', name: 'Calgary Flames' },
  { id: 'nhl-CAR', sport: 'hockey', league: 'nhl', abbr: 'CAR', name: 'Carolina Hurricanes' },
  { id: 'nhl-CHI', sport: 'hockey', league: 'nhl', abbr: 'CHI', name: 'Chicago Blackhawks' },
  { id: 'nhl-COL', sport: 'hockey', league: 'nhl', abbr: 'COL', name: 'Colorado Avalanche' },
  { id: 'nhl-CBJ', sport: 'hockey', league: 'nhl', abbr: 'CBJ', name: 'Columbus Blue Jackets' },
  { id: 'nhl-DAL', sport: 'hockey', league: 'nhl', abbr: 'DAL', name: 'Dallas Stars' },
  { id: 'nhl-DET', sport: 'hockey', league: 'nhl', abbr: 'DET', name: 'Detroit Red Wings' },
  { id: 'nhl-EDM', sport: 'hockey', league: 'nhl', abbr: 'EDM', name: 'Edmonton Oilers' },
  { id: 'nhl-FLA', sport: 'hockey', league: 'nhl', abbr: 'FLA', name: 'Florida Panthers' },
  { id: 'nhl-LAK', sport: 'hockey', league: 'nhl', abbr: 'LAK', name: 'Los Angeles Kings' },
  { id: 'nhl-MIN', sport: 'hockey', league: 'nhl', abbr: 'MIN', name: 'Minnesota Wild' },
  { id: 'nhl-MTL', sport: 'hockey', league: 'nhl', abbr: 'MTL', name: 'Montreal Canadiens' },
  { id: 'nhl-NSH', sport: 'hockey', league: 'nhl', abbr: 'NSH', name: 'Nashville Predators' },
  { id: 'nhl-NJD', sport: 'hockey', league: 'nhl', abbr: 'NJD', name: 'New Jersey Devils' },
  { id: 'nhl-NYI', sport: 'hockey', league: 'nhl', abbr: 'NYI', name: 'New York Islanders' },
  { id: 'nhl-NYR', sport: 'hockey', league: 'nhl', abbr: 'NYR', name: 'New York Rangers' },
  { id: 'nhl-OTT', sport: 'hockey', league: 'nhl', abbr: 'OTT', name: 'Ottawa Senators' },
  { id: 'nhl-PHI', sport: 'hockey', league: 'nhl', abbr: 'PHI', name: 'Philadelphia Flyers' },
  { id: 'nhl-PIT', sport: 'hockey', league: 'nhl', abbr: 'PIT', name: 'Pittsburgh Penguins' },
  { id: 'nhl-SJS', sport: 'hockey', league: 'nhl', abbr: 'SJS', name: 'San Jose Sharks' },
  { id: 'nhl-SEA', sport: 'hockey', league: 'nhl', abbr: 'SEA', name: 'Seattle Kraken' },
  { id: 'nhl-STL', sport: 'hockey', league: 'nhl', abbr: 'STL', name: 'St. Louis Blues' },
  { id: 'nhl-TB', sport: 'hockey', league: 'nhl', abbr: 'TB', name: 'Tampa Bay Lightning' },
  { id: 'nhl-TOR', sport: 'hockey', league: 'nhl', abbr: 'TOR', name: 'Toronto Maple Leafs' },
  { id: 'nhl-UTA', sport: 'hockey', league: 'nhl', abbr: 'UTA', name: 'Utah Hockey Club' },
  { id: 'nhl-VAN', sport: 'hockey', league: 'nhl', abbr: 'VAN', name: 'Vancouver Canucks' },
  { id: 'nhl-VGK', sport: 'hockey', league: 'nhl', abbr: 'VGK', name: 'Vegas Golden Knights' },
  { id: 'nhl-WSH', sport: 'hockey', league: 'nhl', abbr: 'WSH', name: 'Washington Capitals' },
  { id: 'nhl-WPG', sport: 'hockey', league: 'nhl', abbr: 'WPG', name: 'Winnipeg Jets' },
  { id: 'pwhl-BOS', sport: 'hockey', league: 'pwhl', abbr: 'BOS', name: 'Boston Fleet' },
  { id: 'pwhl-MIN', sport: 'hockey', league: 'pwhl', abbr: 'MIN', name: 'Minnesota Frost' },
  { id: 'pwhl-MTL', sport: 'hockey', league: 'pwhl', abbr: 'MTL', name: 'Montreal Victoire' },
  { id: 'pwhl-NY', sport: 'hockey', league: 'pwhl', abbr: 'NY', name: 'New York Sirens' },
  { id: 'pwhl-OTT', sport: 'hockey', league: 'pwhl', abbr: 'OTT', name: 'Ottawa Charge' },
  { id: 'pwhl-SEA', sport: 'hockey', league: 'pwhl', abbr: 'SEA', name: 'Seattle Torrent' },
  { id: 'pwhl-TOR', sport: 'hockey', league: 'pwhl', abbr: 'TOR', name: 'Toronto Sceptres' },
  { id: 'pwhl-VAN', sport: 'hockey', league: 'pwhl', abbr: 'VAN', name: 'Vancouver Goldeneyes' },
  { id: 'mls-ATL', sport: 'soccer', league: 'usa.1', abbr: 'ATL', name: 'Atlanta United FC' },
  { id: 'mls-ATX', sport: 'soccer', league: 'usa.1', abbr: 'ATX', name: 'Austin FC' },
  { id: 'mls-CLT', sport: 'soccer', league: 'usa.1', abbr: 'CLT', name: 'Charlotte FC' },
  { id: 'mls-CHI', sport: 'soccer', league: 'usa.1', abbr: 'CHI', name: 'Chicago Fire FC' },
  { id: 'mls-CIN', sport: 'soccer', league: 'usa.1', abbr: 'CIN', name: 'FC Cincinnati' },
  { id: 'mls-COL', sport: 'soccer', league: 'usa.1', abbr: 'COL', name: 'Colorado Rapids' },
  { id: 'mls-CLB', sport: 'soccer', league: 'usa.1', abbr: 'CLB', name: 'Columbus Crew' },
  { id: 'mls-DAL', sport: 'soccer', league: 'usa.1', abbr: 'DAL', name: 'FC Dallas' },
  { id: 'mls-DC', sport: 'soccer', league: 'usa.1', abbr: 'DC', name: 'D.C. United' },
  { id: 'mls-HOU', sport: 'soccer', league: 'usa.1', abbr: 'HOU', name: 'Houston Dynamo FC' },
  { id: 'mls-LAFC', sport: 'soccer', league: 'usa.1', abbr: 'LAFC', name: 'Los Angeles FC' },
  { id: 'mls-LA', sport: 'soccer', league: 'usa.1', abbr: 'LA', name: 'LA Galaxy' },
  { id: 'mls-MIA', sport: 'soccer', league: 'usa.1', abbr: 'MIA', name: 'Inter Miami CF' },
  { id: 'mls-MIN', sport: 'soccer', league: 'usa.1', abbr: 'MIN', name: 'Minnesota United FC' },
  { id: 'mls-MTL', sport: 'soccer', league: 'usa.1', abbr: 'MTL', name: 'CF Montréal' },
  { id: 'mls-NSH', sport: 'soccer', league: 'usa.1', abbr: 'NSH', name: 'Nashville SC' },
  { id: 'mls-NE', sport: 'soccer', league: 'usa.1', abbr: 'NE', name: 'New England Revolution' },
  { id: 'mls-NYC', sport: 'soccer', league: 'usa.1', abbr: 'NYC', name: 'New York City FC' },
  { id: 'mls-NY', sport: 'soccer', league: 'usa.1', abbr: 'NY', name: 'New York Red Bulls' },
  { id: 'mls-ORL', sport: 'soccer', league: 'usa.1', abbr: 'ORL', name: 'Orlando City SC' },
  { id: 'mls-PHI', sport: 'soccer', league: 'usa.1', abbr: 'PHI', name: 'Philadelphia Union' },
  { id: 'mls-POR', sport: 'soccer', league: 'usa.1', abbr: 'POR', name: 'Portland Timbers' },
  { id: 'mls-RSL', sport: 'soccer', league: 'usa.1', abbr: 'RSL', name: 'Real Salt Lake' },
  { id: 'mls-SJ', sport: 'soccer', league: 'usa.1', abbr: 'SJ', name: 'San Jose Earthquakes' },
  { id: 'mls-SEA', sport: 'soccer', league: 'usa.1', abbr: 'SEA', name: 'Seattle Sounders FC' },
  { id: 'mls-SKC', sport: 'soccer', league: 'usa.1', abbr: 'SKC', name: 'Sporting Kansas City' },
  { id: 'mls-STL', sport: 'soccer', league: 'usa.1', abbr: 'STL', name: 'St. Louis City SC' },
  { id: 'mls-TOR', sport: 'soccer', league: 'usa.1', abbr: 'TOR', name: 'Toronto FC' },
  { id: 'mls-VAN', sport: 'soccer', league: 'usa.1', abbr: 'VAN', name: 'Vancouver Whitecaps FC' },
  { id: 'mls-SD', sport: 'soccer', league: 'usa.1', abbr: 'SD', name: 'San Diego FC' },
  { id: 'epl-ARS', sport: 'soccer', league: 'eng.1', abbr: 'ARS', name: 'Arsenal' },
  { id: 'epl-AVL', sport: 'soccer', league: 'eng.1', abbr: 'AVL', name: 'Aston Villa' },
  { id: 'epl-BOU', sport: 'soccer', league: 'eng.1', abbr: 'BOU', name: 'Bournemouth' },
  { id: 'epl-BRE', sport: 'soccer', league: 'eng.1', abbr: 'BRE', name: 'Brentford' },
  { id: 'epl-BHA', sport: 'soccer', league: 'eng.1', abbr: 'BHA', name: 'Brighton & Hove Albion' },
  { id: 'epl-CHE', sport: 'soccer', league: 'eng.1', abbr: 'CHE', name: 'Chelsea' },
  { id: 'epl-CRY', sport: 'soccer', league: 'eng.1', abbr: 'CRY', name: 'Crystal Palace' },
  { id: 'epl-EVE', sport: 'soccer', league: 'eng.1', abbr: 'EVE', name: 'Everton' },
  { id: 'epl-FUL', sport: 'soccer', league: 'eng.1', abbr: 'FUL', name: 'Fulham' },
  { id: 'epl-IPS', sport: 'soccer', league: 'eng.1', abbr: 'IPS', name: 'Ipswich Town' },
  { id: 'epl-LEI', sport: 'soccer', league: 'eng.1', abbr: 'LEI', name: 'Leicester City' },
  { id: 'epl-LIV', sport: 'soccer', league: 'eng.1', abbr: 'LIV', name: 'Liverpool' },
  { id: 'epl-MCI', sport: 'soccer', league: 'eng.1', abbr: 'MCI', name: 'Manchester City' },
  { id: 'epl-MUN', sport: 'soccer', league: 'eng.1', abbr: 'MUN', name: 'Manchester United' },
  { id: 'epl-NEW', sport: 'soccer', league: 'eng.1', abbr: 'NEW', name: 'Newcastle United' },
  { id: 'epl-NFO', sport: 'soccer', league: 'eng.1', abbr: 'NFO', name: 'Nottingham Forest' },
  { id: 'epl-SOU', sport: 'soccer', league: 'eng.1', abbr: 'SOU', name: 'Southampton' },
  { id: 'epl-TOT', sport: 'soccer', league: 'eng.1', abbr: 'TOT', name: 'Tottenham Hotspur' },
  { id: 'epl-WHU', sport: 'soccer', league: 'eng.1', abbr: 'WHU', name: 'West Ham United' },
  { id: 'epl-WOL', sport: 'soccer', league: 'eng.1', abbr: 'WOL', name: 'Wolverhampton Wanderers' },
  { id: 'fifa-ALG', sport: 'soccer', league: 'fifa.world', abbr: 'ALG', name: 'Algeria' },
  { id: 'fifa-ARG', sport: 'soccer', league: 'fifa.world', abbr: 'ARG', name: 'Argentina' },
  { id: 'fifa-AUS', sport: 'soccer', league: 'fifa.world', abbr: 'AUS', name: 'Australia' },
  { id: 'fifa-AUT', sport: 'soccer', league: 'fifa.world', abbr: 'AUT', name: 'Austria' },
  { id: 'fifa-BEL', sport: 'soccer', league: 'fifa.world', abbr: 'BEL', name: 'Belgium' },
  { id: 'fifa-BOL', sport: 'soccer', league: 'fifa.world', abbr: 'BOL', name: 'Bolivia' },
  { id: 'fifa-BRA', sport: 'soccer', league: 'fifa.world', abbr: 'BRA', name: 'Brazil' },
  { id: 'fifa-CMR', sport: 'soccer', league: 'fifa.world', abbr: 'CMR', name: 'Cameroon' },
  { id: 'fifa-CAN', sport: 'soccer', league: 'fifa.world', abbr: 'CAN', name: 'Canada' },
  { id: 'fifa-CHI', sport: 'soccer', league: 'fifa.world', abbr: 'CHI', name: 'Chile' },
  { id: 'fifa-COL', sport: 'soccer', league: 'fifa.world', abbr: 'COL', name: 'Colombia' },
  { id: 'fifa-CRC', sport: 'soccer', league: 'fifa.world', abbr: 'CRC', name: 'Costa Rica' },
  { id: 'fifa-CRO', sport: 'soccer', league: 'fifa.world', abbr: 'CRO', name: 'Croatia' },
  { id: 'fifa-CZE', sport: 'soccer', league: 'fifa.world', abbr: 'CZE', name: 'Czech Republic' },
  { id: 'fifa-DEN', sport: 'soccer', league: 'fifa.world', abbr: 'DEN', name: 'Denmark' },
  { id: 'fifa-ECU', sport: 'soccer', league: 'fifa.world', abbr: 'ECU', name: 'Ecuador' },
  { id: 'fifa-EGY', sport: 'soccer', league: 'fifa.world', abbr: 'EGY', name: 'Egypt' },
  { id: 'fifa-SLV', sport: 'soccer', league: 'fifa.world', abbr: 'SLV', name: 'El Salvador' },
  { id: 'fifa-ENG', sport: 'soccer', league: 'fifa.world', abbr: 'ENG', name: 'England' },
  { id: 'fifa-FIN', sport: 'soccer', league: 'fifa.world', abbr: 'FIN', name: 'Finland' },
  { id: 'fifa-FRA', sport: 'soccer', league: 'fifa.world', abbr: 'FRA', name: 'France' },
  { id: 'fifa-GER', sport: 'soccer', league: 'fifa.world', abbr: 'GER', name: 'Germany' },
  { id: 'fifa-GHA', sport: 'soccer', league: 'fifa.world', abbr: 'GHA', name: 'Ghana' },
  { id: 'fifa-GRE', sport: 'soccer', league: 'fifa.world', abbr: 'GRE', name: 'Greece' },
  { id: 'fifa-HON', sport: 'soccer', league: 'fifa.world', abbr: 'HON', name: 'Honduras' },
  { id: 'fifa-HUN', sport: 'soccer', league: 'fifa.world', abbr: 'HUN', name: 'Hungary' },
  { id: 'fifa-ISL', sport: 'soccer', league: 'fifa.world', abbr: 'ISL', name: 'Iceland' },
  { id: 'fifa-IRN', sport: 'soccer', league: 'fifa.world', abbr: 'IRN', name: 'Iran' },
  { id: 'fifa-IRQ', sport: 'soccer', league: 'fifa.world', abbr: 'IRQ', name: 'Iraq' },
  { id: 'fifa-ITA', sport: 'soccer', league: 'fifa.world', abbr: 'ITA', name: 'Italy' },
  { id: 'fifa-CIV', sport: 'soccer', league: 'fifa.world', abbr: 'CIV', name: 'Ivory Coast' },
  { id: 'fifa-JAM', sport: 'soccer', league: 'fifa.world', abbr: 'JAM', name: 'Jamaica' },
  { id: 'fifa-JPN', sport: 'soccer', league: 'fifa.world', abbr: 'JPN', name: 'Japan' },
  { id: 'fifa-MLI', sport: 'soccer', league: 'fifa.world', abbr: 'MLI', name: 'Mali' },
  { id: 'fifa-MEX', sport: 'soccer', league: 'fifa.world', abbr: 'MEX', name: 'Mexico' },
  { id: 'fifa-MAR', sport: 'soccer', league: 'fifa.world', abbr: 'MAR', name: 'Morocco' },
  { id: 'fifa-NED', sport: 'soccer', league: 'fifa.world', abbr: 'NED', name: 'Netherlands' },
  { id: 'fifa-NZL', sport: 'soccer', league: 'fifa.world', abbr: 'NZL', name: 'New Zealand' },
  { id: 'fifa-NGA', sport: 'soccer', league: 'fifa.world', abbr: 'NGA', name: 'Nigeria' },
  { id: 'fifa-NIR', sport: 'soccer', league: 'fifa.world', abbr: 'NIR', name: 'Northern Ireland' },
  { id: 'fifa-NOR', sport: 'soccer', league: 'fifa.world', abbr: 'NOR', name: 'Norway' },
  { id: 'fifa-PAN', sport: 'soccer', league: 'fifa.world', abbr: 'PAN', name: 'Panama' },
  { id: 'fifa-PAR', sport: 'soccer', league: 'fifa.world', abbr: 'PAR', name: 'Paraguay' },
  { id: 'fifa-PER', sport: 'soccer', league: 'fifa.world', abbr: 'PER', name: 'Peru' },
  { id: 'fifa-POL', sport: 'soccer', league: 'fifa.world', abbr: 'POL', name: 'Poland' },
  { id: 'fifa-POR', sport: 'soccer', league: 'fifa.world', abbr: 'POR', name: 'Portugal' },
  { id: 'fifa-QAT', sport: 'soccer', league: 'fifa.world', abbr: 'QAT', name: 'Qatar' },
  { id: 'fifa-IRL', sport: 'soccer', league: 'fifa.world', abbr: 'IRL', name: 'Republic of Ireland' },
  { id: 'fifa-ROU', sport: 'soccer', league: 'fifa.world', abbr: 'ROU', name: 'Romania' },
  { id: 'fifa-KSA', sport: 'soccer', league: 'fifa.world', abbr: 'KSA', name: 'Saudi Arabia' },
  { id: 'fifa-SCO', sport: 'soccer', league: 'fifa.world', abbr: 'SCO', name: 'Scotland' },
  { id: 'fifa-SEN', sport: 'soccer', league: 'fifa.world', abbr: 'SEN', name: 'Senegal' },
  { id: 'fifa-SRB', sport: 'soccer', league: 'fifa.world', abbr: 'SRB', name: 'Serbia' },
  { id: 'fifa-SVK', sport: 'soccer', league: 'fifa.world', abbr: 'SVK', name: 'Slovakia' },
  { id: 'fifa-RSA', sport: 'soccer', league: 'fifa.world', abbr: 'RSA', name: 'South Africa' },
  { id: 'fifa-KOR', sport: 'soccer', league: 'fifa.world', abbr: 'KOR', name: 'South Korea' },
  { id: 'fifa-ESP', sport: 'soccer', league: 'fifa.world', abbr: 'ESP', name: 'Spain' },
  { id: 'fifa-SWE', sport: 'soccer', league: 'fifa.world', abbr: 'SWE', name: 'Sweden' },
  { id: 'fifa-SUI', sport: 'soccer', league: 'fifa.world', abbr: 'SUI', name: 'Switzerland' },
  { id: 'fifa-TUN', sport: 'soccer', league: 'fifa.world', abbr: 'TUN', name: 'Tunisia' },
  { id: 'fifa-TUR', sport: 'soccer', league: 'fifa.world', abbr: 'TUR', name: 'Turkey' },
  { id: 'fifa-UKR', sport: 'soccer', league: 'fifa.world', abbr: 'UKR', name: 'Ukraine' },
  { id: 'fifa-UAE', sport: 'soccer', league: 'fifa.world', abbr: 'UAE', name: 'United Arab Emirates' },
  { id: 'fifa-USA', sport: 'soccer', league: 'fifa.world', abbr: 'USA', name: 'United States' },
  { id: 'fifa-URU', sport: 'soccer', league: 'fifa.world', abbr: 'URU', name: 'Uruguay' },
  { id: 'fifa-UZB', sport: 'soccer', league: 'fifa.world', abbr: 'UZB', name: 'Uzbekistan' },
  { id: 'fifa-VEN', sport: 'soccer', league: 'fifa.world', abbr: 'VEN', name: 'Venezuela' },
  { id: 'fifa-WAL', sport: 'soccer', league: 'fifa.world', abbr: 'WAL', name: 'Wales' },
  { id: 'wnba-ATL', sport: 'basketball', league: 'wnba', abbr: 'ATL', name: 'Atlanta Dream' },
  { id: 'wnba-CHI', sport: 'basketball', league: 'wnba', abbr: 'CHI', name: 'Chicago Sky' },
  { id: 'wnba-CONN', sport: 'basketball', league: 'wnba', abbr: 'CONN', name: 'Connecticut Sun' },
  { id: 'wnba-DAL', sport: 'basketball', league: 'wnba', abbr: 'DAL', name: 'Dallas Wings' },
  { id: 'wnba-GS', sport: 'basketball', league: 'wnba', abbr: 'GS', name: 'Golden State Valkyries' },
  { id: 'wnba-IND', sport: 'basketball', league: 'wnba', abbr: 'IND', name: 'Indiana Fever' },
  { id: 'wnba-LV', sport: 'basketball', league: 'wnba', abbr: 'LV', name: 'Las Vegas Aces' },
  { id: 'wnba-LA', sport: 'basketball', league: 'wnba', abbr: 'LA', name: 'Los Angeles Sparks' },
  { id: 'wnba-MIN', sport: 'basketball', league: 'wnba', abbr: 'MIN', name: 'Minnesota Lynx' },
  { id: 'wnba-NY', sport: 'basketball', league: 'wnba', abbr: 'NY', name: 'New York Liberty' },
  { id: 'wnba-PHX', sport: 'basketball', league: 'wnba', abbr: 'PHX', name: 'Phoenix Mercury' },
  { id: 'wnba-POR', sport: 'basketball', league: 'wnba', abbr: 'POR', name: 'Portland WNBA' },
  { id: 'wnba-SEA', sport: 'basketball', league: 'wnba', abbr: 'SEA', name: 'Seattle Storm' },
  { id: 'wnba-TOR', sport: 'basketball', league: 'wnba', abbr: 'TOR', name: 'Toronto WNBA' },
  { id: 'wnba-WSH', sport: 'basketball', league: 'wnba', abbr: 'WSH', name: 'Washington Mystics' },
  { id: 'news-toi', league: 'news', name: 'The Times of Israel', url: '<https://www.timesofisrael.com/feed/>' },
  { id: 'news-jpost', league: 'news', name: 'Jerusalem Post', url: '<https://www.jpost.com/rss/rssfeedsfrontpage.aspx>' },
  { id: 'news-espn', league: 'news', name: 'ESPN Top News', url: '<https://www.espn.com/espn/rss/news>' },
  { id: 'news-nyp', league: 'news', name: 'NY Post Sports', url: '<https://nypost.com/sports/feed/>' },
  { id: 'news-yahoo', league: 'news', name: 'Yahoo Sports', url: '<https://sports.yahoo.com/rss/>' },
  { id: 'news-fox', league: 'news', name: 'Fox News', url: 'http://feeds.foxnews.com/foxnews/latest' },
  { id: 'news-nyt', league: 'news', name: 'NY Times World', url: '<https://rss.nytimes.com/services/xml/rss/nyt/World.xml>' },
  { id: 'special-nfl-draft', league: 'special', name: 'NFL Draft Tracker' },
  { id: 'scoreboard-nfl', league: 'scoreboard', sport: 'football', targetLeague: 'nfl', name: 'NFL Scoreboard' },
  { id: 'scoreboard-mlb', league: 'scoreboard', sport: 'baseball', targetLeague: 'mlb', name: 'MLB Scoreboard' },
  { id: 'scoreboard-nba', league: 'scoreboard', sport: 'basketball', targetLeague: 'nba', name: 'NBA Scoreboard' },
  { id: 'scoreboard-wnba', league: 'scoreboard', sport: 'basketball', targetLeague: 'wnba', name: 'WNBA Scoreboard' },
  { id: 'scoreboard-nhl', league: 'scoreboard', sport: 'hockey', targetLeague: 'nhl', name: 'NHL Scoreboard' },
  { id: 'scoreboard-mls', league: 'scoreboard', sport: 'soccer', targetLeague: 'usa.1', name: 'MLS Scoreboard' },
  { id: 'scoreboard-epl', league: 'scoreboard', sport: 'soccer', targetLeague: 'eng.1', name: 'Premier League Scoreboard' },
  { id: 'scoreboard-fifa', league: 'scoreboard', sport: 'soccer', targetLeague: 'fifa.world', name: 'FIFA World Cup Scoreboard' },
];

// --- Firebase Configuration ---
// IMPORTANT: Use the same credentials as in your App.js
const firebaseConfig = {
  apiKey: "AIzaSyCXoDVmryclNRrkcbo2_quEtTPXMhHoG4s",
  authDomain: "shabbosmode-83043.firebaseapp.com",
  databaseURL: "https://shabbosmode-83043-default-rtdb.firebaseio.com",
  projectId: "shabbosmode-83043",
  storageBucket: "shabbosmode-83043.firebasestorage.app",
  messagingSenderId: "1071512338854",
  appId: "1:1071512338854:web:265ec0bc0b037ad4a70f67"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const deviceId = params.get('id');
    const teamsListDiv = document.getElementById('teams-list');
    const saveButton = document.getElementById('save-button');
    const statusDiv = document.getElementById('status');

    if (!deviceId) {
        teamsListDiv.innerHTML = '<p style="color: red; text-align: center;">Error: No device ID found in URL. Please re-scan the QR code from your app.</p>';
        saveButton.disabled = true;
        return;
    }
    const timingCategories = [
        { key: 'SPORTS', label: 'Game Cards (All Leagues)' },
        { key: 'SCOREBOARD', label: 'Scoreboards (All Leagues)' },
        { key: 'NEWS', label: 'News Headlines' },
        { key: 'WEATHER', label: 'Weather' },
        { key: 'NFL_DRAFT', label: 'NFL Draft' },
    ];
    const dbRef = database.ref(`devices/${deviceId}/preferences`);

    const formatLeagueName = (league) => {
        if (!league) return '';
        const lg = String(league).toUpperCase();
        if (lg === 'USA.1') return 'MLS';
        if (lg === 'ENG.1') return 'PREMIER LEAGUE';
        if (lg === 'FIFA.WORLD') return 'FIFA WORLD CUP';
        return lg;
    };

    const leagues = [...new Set(ALL_AVAILABLE_ITEMS.map(t => formatLeagueName(t.league)))];

    dbRef.once('value', (snapshot) => {
      const remoteData = snapshot.val() || {};
        const selectedIds = remoteData.teams || (Array.isArray(remoteData) ? remoteData : []);
        const currentTimings = remoteData.timings || {};        
        leagues.forEach(league => {
            const section = document.createElement('div');
            section.className = 'league-section';
            
            const header = document.createElement('div');
            header.className = 'league-header';
            header.textContent = league;
            section.appendChild(header);

            ALL_AVAILABLE_ITEMS
                .filter(item => formatLeagueName(item.league) === league)
                .forEach(item => {
                    const label = document.createElement('label');
                    label.className = 'team-item';
                    
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.value = item.id;
                    checkbox.checked = selectedIds.includes(item.id);
                    
                    label.appendChild(checkbox);
                    label.appendChild(document.createTextNode(item.name));
                    section.appendChild(label);
                });
            
            teamsListDiv.appendChild(section);
        });
       // Populate timing sliders
        timingCategories.forEach(({ key, label }) => {
            const value = currentTimings[key] || 8;
            const container = document.createElement('div');
            container.className = 'slider-container';

            const labelEl = document.createElement('label');
            labelEl.textContent = `${label}: `;
            
            const valueSpan = document.createElement('span');
            valueSpan.style.fontWeight = 'bold';
            valueSpan.textContent = `${value}s`;

            const slider = document.createElement('input');
            slider.type = 'range';
            slider.min = 3;
            slider.max = 15;
            slider.value = value;
            slider.dataset.key = key;
            slider.oninput = () => {
                valueSpan.textContent = `${slider.value}s`;
            };

            labelEl.appendChild(valueSpan);
            container.appendChild(labelEl);
            container.appendChild(slider);
            timingSettingsDiv.appendChild(container);
        });
    });
      
    });

    saveButton.addEventListener('click', () => {
        const selectedCheckboxes = document.querySelectorAll('#teams-list input[type="checkbox"]:checked');
        const newSelectedIds = Array.from(selectedCheckboxes).map(cb => cb.value);
        const newTimings = {};
        document.querySelectorAll('#timing-settings input[type="range"]').forEach(slider => {
            newTimings[slider.dataset.key] = parseInt(slider.value, 10);
        });        
        statusDiv.textContent = 'Saving...';
        const payload = {
            teams: newSelectedIds,
            timings: newTimings,
            lastUpdated: firebase.database.ServerValue.TIMESTAMP
        };
        dbRef.set(payload)
            .then(() => {
                statusDiv.textContent = 'Saved successfully! The ticker will update shortly.';
                setTimeout(() => statusDiv.textContent = '', 3000);
            })
            .catch((error) => {
                statusDiv.textContent = `Error: ${error.message}`;
            });
    });
});
