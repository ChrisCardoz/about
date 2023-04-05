export interface Links {
	bR: string; // Baseball Reference
	fG: string; // Fan Graphs
	bS: string; // Baseball Savant
}

export interface Player {
	rank: number;
	name: string;
	position: string;
	rate: number | number[];
	war: number;
	links: Links;
	img: string;
	team: string;
}
