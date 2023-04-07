import {Player} from './types';

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

export type Order = 'asc' | 'desc';

export function getComparator<Key extends keyof any>(
	order: Order,
	orderBy: Key
): (a: {[key in Key]: number | string}, b: {[key in Key]: number | string}) => number {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
export function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
	const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
	disablePadding: boolean;
	id: keyof Player;
	label: string;
	numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
	{
		id: 'rank',
		numeric: true,
		disablePadding: true,
		label: 'Rank',
	},
	{
		id: 'name',
		numeric: false,
		disablePadding: false,
		label: 'Player',
	},
	{
		id: 'team',
		numeric: false,
		disablePadding: false,
		label: 'Team',
	},
	{
		id: 'position',
		numeric: false,
		disablePadding: false,
		label: 'Position',
	},
	{
		id: 'rate',
		numeric: true,
		disablePadding: false,
		label: 'Rate-Based Stats',
	},
	{
		id: 'war',
		numeric: true,
		disablePadding: false,
		label: 'fWar',
	},
	{
		id: 'links',
		numeric: false,
		disablePadding: false,
		label: 'More Stats',
	},
];

export interface EnhancedTableProps {
	onRequestSort: (event: React.MouseEvent<unknown>, newOrderBy: keyof Player) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
}
