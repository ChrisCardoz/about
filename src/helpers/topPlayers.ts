import {Player} from './types';

const rows: Player[] = [
	{
		rank: 1,
		name: 'Shohei Ohtani',
		position: 'DH, SP',
		rate: [145, 172],
		war: 9.5,
		links: {
			bR: 'https://www.baseball-reference.com/players/o/ohtansh01.shtml',
			fG: 'https://www.fangraphs.com/players/shohei-ohtani/19755/stats?position=DH',
			bS: 'https://baseballsavant.mlb.com/savant-player/shohei-ohtani-660271?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/2/270bfa31_mlbam.jpg',
		team: 'LAA',
	},
	{
		rank: 2,
		name: 'Sandy Alcantara',
		position: 'SP',
		rate: 178,
		war: 5.7,
		links: {
			bR: 'https://www.baseball-reference.com/players/a/alcansa01.shtml',
			fG: 'https://www.fangraphs.com/players/sandy-alcantara/18684/stats?position=P',
			bS: 'https://baseballsavant.mlb.com/savant-player/sandy-alcantara-645261?stats=statcast-r-pitching-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/c/c9ec32b0_mlbam.jpg',
		team: 'MIA',
	},
	{
		rank: 3,
		name: 'Aaron Judge',
		position: 'RF',
		rate: 211,
		war: 11.5,
		links: {
			bR: 'https://www.baseball-reference.com/players/j/judgeaa01.shtml',
			fG: 'https://www.fangraphs.com/players/aaron-judge/15640/stats?position=OF',
			bS: 'https://baseballsavant.mlb.com/savant-player/aaron-judge-592450?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/0/06c9f502_mlbam.jpg',
		team: 'NYY',
	},
	{
		rank: 4,
		name: 'Mike Trout',
		position: 'CF',
		rate: 178,
		war: 6.1,
		links: {
			bR: 'https://www.baseball-reference.com/players/t/troutmi01.shtml',
			fG: 'https://www.fangraphs.com/players/mike-trout/10155/stats?position=OF',
			bS: 'https://baseballsavant.mlb.com/savant-player/mike-trout-545361?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/f/f322d40f_mlbam.jpg',
		team: 'LAA',
	},
	{
		rank: 5,
		name: 'Mookie Betts',
		position: 'RF',
		rate: 137,
		war: 6.5,
		links: {
			bR: 'https://www.baseball-reference.com/players/b/bettsmo01.shtml',
			fG: 'https://www.fangraphs.com/players/mookie-betts/13611/stats?position=OF',
			bS: 'https://baseballsavant.mlb.com/savant-player/mookie-betts-605141?stats=statcast-r-hitting-mlbb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/f/f3a0cc68_mlbam.jpg',
		team: 'LAD',
	},
	{
		rank: 6,
		name: 'Jacob deGrom',
		position: 'SP',
		rate: 126,
		war: 2.2,
		links: {
			bR: 'https://www.baseball-reference.com/players/d/degroja01.shtml',
			fG: 'https://www.fangraphs.com/players/jacob-degrom/10954/stats?position=P',
			bS: 'https://baseballsavant.mlb.com/savant-player/jacob-degrom-594798?stats=statcast-r-pitching-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/a/a4f0935e_mlbam.jpg',
		team: 'TEX',
	},
	{
		rank: 7,
		name: 'Manny Machado',
		position: '3B',
		rate: 159,
		war: 7.4,
		links: {
			bR: 'https://www.baseball-reference.com/players/m/machama01.shtml',
			fG: 'https://www.fangraphs.com/players/manny-machado/11493/stats?position=3B',
			bS: 'https://baseballsavant.mlb.com/savant-player/manny-machado-592518?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/4/45d62ce6_mlbam.jpg',
		team: 'SDP',
	},
	{
		rank: 8,
		name: 'Yordan Alvarez',
		position: 'DH, LF',
		rate: 178,
		war: 6.7,
		links: {
			bR: 'https://www.baseball-reference.com/players/a/alvaryo01.shtml',
			fG: 'https://www.fangraphs.com/players/yordan-alvarez/19556/stats?position=DH/OF',
			bS: 'https://baseballsavant.mlb.com/savant-player/yordan-alvarez-670541?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/6/6abe077d_mlbam.jpg',
		team: 'HOU',
	},
	{
		rank: 9,
		name: 'Juan Soto',
		position: 'LF',
		rate: 149,
		war: 3.8,
		links: {
			bR: 'https://www.baseball-reference.com/players/s/sotoju01.shtml',
			fG: 'https://www.fangraphs.com/players/juan-soto/20123/stats?position=OF',
			bS: 'https://baseballsavant.mlb.com/savant-player/juan-soto-665742?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/e/e36a85e0_mlbam.jpg',
		team: 'SDP',
	},
	{
		rank: 10,
		name: 'Trea Turner',
		position: 'SS',
		rate: 122,
		war: 6.3,
		links: {
			bR: 'https://www.baseball-reference.com/players/t/turnetr01.shtml',
			fG: 'https://www.fangraphs.com/players/trea-turner/16252/stats?position=SS',
			bS: 'https://baseballsavant.mlb.com/savant-player/trea-turner-607208?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/7/7ba8f9ac_mlbam.jpg',
		team: 'PHI',
	},
	{
		rank: 11,
		name: 'Francisco Lindor',
		position: 'SS',
		rate: 125,
		war: 6.8,
		links: {
			bR: 'https://www.baseball-reference.com/players/l/lindofr01.shtml',
			fG: 'https://www.fangraphs.com/players/francisco-lindor/12916/stats?position=SS',
			bS: 'https://baseballsavant.mlb.com/savant-player/francisco-lindor-596019?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/a/a8298e85_mlbam.jpg',
		team: 'NYM',
	},
	{
		rank: 12,
		name: 'Nolan Arenado',
		position: '3B',
		rate: 154,
		war: 7.3,
		links: {
			bR: 'https://www.baseball-reference.com/players/a/arenano01.shtml',
			fG: 'https://www.fangraphs.com/players/nolan-arenado/9777/stats?position=3B',
			bS: 'https://baseballsavant.mlb.com/savant-player/nolan-arenado-571448?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/4/4009314f_mlbam.jpg',
		team: 'STL',
	},
	{
		rank: 13,
		name: 'Jose Ramirez',
		position: '3B',
		rate: 148,
		war: 6.8,
		links: {
			bR: 'https://www.baseball-reference.com/players/r/ramirjo01.shtml',
			fG: 'https://www.fangraphs.com/players/jose-ramirez/13510/stats?position=3B',
			bS: 'https://baseballsavant.mlb.com/savant-player/jose-ramirez-608070?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/e/e3e66986_mlbam.jpg',
		team: 'CLE',
	},
	{
		rank: 14,
		name: 'Carlos Rodon',
		position: '3B',
		rate: 185,
		war: 6.2,
		links: {
			bR: 'https://www.baseball-reference.com/players/r/rodonca01.shtml',
			fG: 'https://www.fangraphs.com/players/carlos-rodon/16137/stats?position=P',
			bS: 'https://baseballsavant.mlb.com/savant-player/carlos-rodon-607074',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/5/54ae54d8_mlbam.jpg',
		team: 'NYY',
	},
	{
		rank: 15,
		name: 'Justin Verlander',
		position: 'SP',
		rate: 218,
		war: 6.1,
		links: {
			bR: 'https://www.baseball-reference.com/players/v/verlaju01.shtml',
			fG: 'https://www.fangraphs.com/players/justin-verlander/8700/stats?position=P',
			bS: 'https://baseballsavant.mlb.com/savant-player/justin-verlander-434378?stats=statcast-r-pitching-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/2/216e5d91_mlbam.jpg',
		team: 'NYM',
	},
	{
		rank: 16,
		name: 'J.T. Realmuto',
		position: 'C',
		rate: 129,
		war: 6.5,
		links: {
			bR: 'https://www.baseball-reference.com/players/r/realmjt01.shtml',
			fG: 'https://www.fangraphs.com/players/jt-realmuto/11739/stats?position=C',
			bS: 'https://baseballsavant.mlb.com/savant-player/j-t-realmuto-592663?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/9/969737fb_mlbam.jpg',
		team: 'PHI',
	},
	{
		rank: 17,
		name: 'Bryce Harper',
		position: 'LF, DH',
		rate: 145,
		war: 2.4,
		links: {
			bR: 'https://www.baseball-reference.com/players/h/harpebr03.shtml',
			fG: 'https://www.fangraphs.com/players/bryce-harper/11579/stats?position=OF',
			bS: 'https://baseballsavant.mlb.com/savant-player/bryce-harper-547180?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/c/c61e922e_mlbam.jpg',
		team: 'PHI',
	},
	{
		rank: 18,
		name: 'Adley Rutchman',
		position: 'C',
		rate: 128,
		war: 5.3,
		links: {
			bR: 'https://www.baseball-reference.com/players/r/rutscad01.shtml',
			fG: 'https://www.fangraphs.com/players/adley-rutschman/26288/stats?position=C',
			bS: 'https://baseballsavant.mlb.com/savant-player/adley-rutschman-668939',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/0/064c7618_mlbam.jpg',
		team: 'BAL',
	},
	{
		rank: 19,
		name: 'Paul Goldschmidt',
		position: '1B',
		rate: 180,
		war: 7.1,
		links: {
			bR: 'https://www.baseball-reference.com/players/g/goldspa01.shtml',
			fG: 'https://www.fangraphs.com/players/paul-goldschmidt/9218/stats?position=1B',
			bS: 'https://baseballsavant.mlb.com/savant-player/paul-goldschmidt-502671?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/6/6b37a7f2_mlbam.jpg',
		team: 'STL',
	},
	{
		rank: 20,
		name: 'Freddie Freeman',
		position: '1B',
		rate: 153,
		war: 7.1,
		links: {
			bR: 'https://www.baseball-reference.com/players/f/freemfr01.shtml',
			fG: 'https://www.fangraphs.com/players/freddie-freeman/5361/stats?position=1B',
			bS: 'https://baseballsavant.mlb.com/savant-player/freddie-freeman-518692?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/2/2c66b3f7_mlbam.jpg',
		team: 'LAD',
	},
	{
		rank: 21,
		name: 'Austin Riley',
		position: '3B',
		rate: 142,
		war: 5.5,
		links: {
			bR: 'https://www.baseball-reference.com/players/r/rileyau01.shtml',
			fG: 'https://www.fangraphs.com/players/austin-riley/18360/stats?position=3B',
			bS: 'https://baseballsavant.mlb.com/savant-player/austin-riley-663586?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/9/9c38fff5_mlbam.jpg',
		team: 'ATL',
	},
	{
		rank: 22,
		name: 'Alex Bregman',
		position: '3B',
		rate: 133,
		war: 5.5,
		links: {
			bR: 'https://www.baseball-reference.com/players/b/bregmal01.shtml',
			fG: 'https://www.fangraphs.com/players/alex-bregman/17678/stats?position=3B',
			bS: 'https://baseballsavant.mlb.com/savant-player/alex-bregman-608324?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/e/e8c871b0_mlbam.jpg',
		team: 'HOU',
	},
	{
		rank: 23,
		name: 'Jose Altuve',
		position: '2B',
		rate: 127,
		war: 6.6,
		links: {
			bR: 'https://www.baseball-reference.com/players/a/altuvjo01.shtml',
			fG: 'https://www.fangraphs.com/players/jose-altuve/5417/stats?position=2B',
			bS: 'https://baseballsavant.mlb.com/savant-player/jose-altuve-514888',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/f/f0e8fd62_mlbam.jpg',
		team: 'HOU',
	},
	{
		rank: 24,
		name: 'Max Scherzer',
		position: 'SP',
		rate: 169,
		war: 4.4,
		links: {
			bR: 'https://www.baseball-reference.com/players/s/scherma01.shtml',
			fG: 'https://www.fangraphs.com/players/max-scherzer/3137/stats?position=P',
			bS: 'https://baseballsavant.mlb.com/savant-player/max-scherzer-453286',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/6/65381047_mlbam.jpg',
		team: 'NYM',
	},
	{
		rank: 25,
		name: 'Zack Wheeler',
		position: 'SP',
		rate: 144,
		war: 4.1,
		links: {
			bR: 'https://www.baseball-reference.com/players/w/wheelza01.shtml',
			fG: 'https://www.fangraphs.com/players/zack-wheeler/10310/stats?position=P',
			bS: 'https://baseballsavant.mlb.com/savant-player/zack-wheeler-554430?stats=statcast-r-pitching-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/c/ceefd163_mlbam.jpg',
		team: 'PHI',
	},
	{
		rank: 26,
		name: 'Jeff McNeil',
		position: '2B, OF',
		rate: 140,
		war: 5.8,
		links: {
			bR: 'https://www.baseball-reference.com/players/m/mcneije01.shtml',
			fG: 'https://www.fangraphs.com/players/jeff-mcneil/15362/stats?position=2B/OF',
			bS: 'https://baseballsavant.mlb.com/savant-player/jeff-mcneil-643446?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/9/9f9b5610_mlbam.jpg',
		team: 'NYM',
	},
	{
		rank: 27,
		name: 'Xander Bogaerts',
		position: 'SS, 3B',
		rate: 131,
		war: 6.1,
		links: {
			bR: 'https://www.baseball-reference.com/players/b/bogaexa01.shtml',
			fG: 'https://www.fangraphs.com/players/xander-bogaerts/12161/stats?position=SS',
			bS: 'https://baseballsavant.mlb.com/savant-player/xander-bogaerts-593428?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/d/dc06acdb_mlbam.jpg',
		team: 'SDP',
	},
	{
		rank: 28,
		name: 'Andres Gimenez',
		position: '2B, SS',
		rate: 141,
		war: 6.1,
		links: {
			bR: 'https://www.baseball-reference.com/players/g/gimenan01.shtml',
			fG: 'https://www.fangraphs.com/players/andres-gimenez/19950/stats?position=2B/SS',
			bS: 'https://baseballsavant.mlb.com/savant-player/andres-gimenez-665926?stats=statcast-r-hitting-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/8/8188888f_mlbam.jpg',
		team: 'CLE',
	},
	{
		rank: 29,
		name: 'Aaron Nola',
		position: 'SP',
		rate: 125,
		war: 6.3,
		links: {
			bR: 'https://www.baseball-reference.com/players/n/nolaaa01.shtml',
			fG: 'https://www.fangraphs.com/players/aaron-nola/16149/stats?position=P',
			bS: 'https://baseballsavant.mlb.com/savant-player/aaron-nola-605400?stats=statcast-r-pitching-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/6/62b4d109_mlbam.jpg',
		team: 'PHI',
	},
	{
		rank: 30,
		name: 'Kevin Gausman',
		position: 'SP',
		rate: 116,
		war: 5.7,
		links: {
			bR: 'https://www.baseball-reference.com/players/g/gausmke01.shtml',
			fG: 'https://www.fangraphs.com/players/kevin-gausman/14107/stats?position=P',
			bS: 'https://baseballsavant.mlb.com/savant-player/kevin-gausman-592332?stats=statcast-r-pitching-mlb',
		},
		img: 'https://www.baseball-reference.com/req/202303230/images/headshots/b/ba588078_mlbam.jpg',
		team: 'TOR',
	},
];

export default rows;
