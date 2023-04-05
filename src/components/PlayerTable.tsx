import * as React from 'react';
import {alpha} from '@mui/material/styles';
import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	TableSortLabel,
	Toolbar,
	Typography,
	Paper,
	Checkbox,
	IconButton,
	Tooltip,
	FormControlLabel,
	Switch,
	Avatar,
	Grid,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import {visuallyHidden} from '@mui/utils';
import {descendingComparator, getComparator, Order, stableSort} from '../helpers/table';
import {Links, Player} from '../helpers/types';
import PlayerRow from './PlayerRow';
import rows from '../helpers/topPlayers';

interface HeadCell {
	disablePadding: boolean;
	id: keyof Player;
	label: string;
	numeric: boolean;
}

const headCells: readonly HeadCell[] = [
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

const DEFAULT_ORDER = 'asc';
const DEFAULT_ORDER_BY = 'rank';
const DEFAULT_ROWS_PER_PAGE = 50;

interface EnhancedTableProps {
	numSelected: number;
	onRequestSort: (event: React.MouseEvent<unknown>, newOrderBy: keyof Player) => void;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
	const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} = props;
	const createSortHandler =
		(newOrderBy: keyof Player) => (event: React.MouseEvent<unknown>) => {
			onRequestSort(event, newOrderBy);
		};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						color="primary"
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{
							'aria-label': 'select all desserts',
						}}
					/>
				</TableCell>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.id === 'links' ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'normal'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

interface EnhancedTableToolbarProps {
	numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
	const {numSelected} = props;

	return (
		<Toolbar
			sx={{
				pl: {sm: 2},
				pr: {xs: 1, sm: 1},
				...(numSelected > 0 && {
					bgcolor: (theme) =>
						alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
				}),
			}}
		>
			{numSelected > 0 ? (
				<Typography
					sx={{flex: '1 1 100%'}}
					color="inherit"
					variant="subtitle1"
					component="div"
				>
					{numSelected} selected
				</Typography>
			) : (
				<Typography sx={{flex: '1 1 100%'}} variant="h6" id="tableTitle" component="div">
					Too 50 Players
				</Typography>
			)}
			{numSelected > 0 ? (
				<Tooltip title="Delete">
					<IconButton>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			) : (
				<Tooltip title="Filter list">
					<IconButton>
						<FilterListIcon />
					</IconButton>
				</Tooltip>
			)}
		</Toolbar>
	);
}

export default function EnhancedTable() {
	const [order, setOrder] = React.useState<Order>(DEFAULT_ORDER);
	const [orderBy, setOrderBy] = React.useState<keyof Player>(DEFAULT_ORDER_BY);
	const [selected, setSelected] = React.useState<readonly number[]>([]);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [visibleRows, setVisibleRows] = React.useState<Player[]>([]);
	const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
	const [paddingHeight, setPaddingHeight] = React.useState(0);

	// React.useEffect(() => {
	// 	let rowsOnMount = stableSort(rows, getComparator(DEFAULT_ORDER, DEFAULT_ORDER_BY));
	// 	rowsOnMount = rowsOnMount.slice(
	// 		0 * DEFAULT_ROWS_PER_PAGE,
	// 		0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE
	// 	);

	// 	setVisibleRows(rowsOnMount as Player[]);
	// }, []);

	// const handleRequestSort = React.useCallback(
	// 	(event: React.MouseEvent<unknown>, newOrderBy: keyof Player) => {
	// 		const isAsc = orderBy === newOrderBy && order === 'asc';
	// 		const toggledOrder = isAsc ? 'desc' : 'asc';
	// 		setOrder(toggledOrder);
	// 		setOrderBy(newOrderBy);

	// 		const sortedRows = stableSort(rows, getComparator(toggledOrder, newOrderBy)) as Player[];
	// 		const updatedRows = sortedRows.slice(
	// 			page * rowsPerPage,
	// 			page * rowsPerPage + rowsPerPage
	// 		);
	// 		setVisibleRows(updatedRows);
	// 	},
	// 	[order, orderBy, page, rowsPerPage]
	// );

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			const newSelected = rows.map((n) => n.rank);
			setSelected(newSelected);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event: React.MouseEvent<unknown>, rank: number) => {
		const selectedIndex = selected.indexOf(rank);
		let newSelected: readonly number[] = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, rank);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			);
		}

		setSelected(newSelected);
	};

	// const handleChangePage = React.useCallback(
	// 	(event: unknown, newPage: number) => {
	// 		setPage(newPage);

	// 		const sortedRows = stableSort(rows, getComparator(order, orderBy));
	// 		const updatedRows = sortedRows.slice(
	// 			newPage * rowsPerPage,
	// 			newPage * rowsPerPage + rowsPerPage
	// 		);
	// 		setVisibleRows(updatedRows);

	// 		// Avoid a layout jump when reaching the last page with empty rows.
	// 		const numEmptyRows =
	// 			newPage > 0 ? Math.max(0, (1 + newPage) * rowsPerPage - rows.length) : 0;

	// 		const newPaddingHeight = (dense ? 33 : 53) * numEmptyRows;
	// 		setPaddingHeight(newPaddingHeight);
	// 	},
	// 	[order, orderBy, dense, rowsPerPage]
	// );

	// const handleChangeRowsPerPage = React.useCallback(
	// 	(event: React.ChangeEvent<HTMLInputElement>) => {
	// 		const updatedRowsPerPage = parseInt(event.target.value, 10);
	// 		setRowsPerPage(updatedRowsPerPage);

	// 		setPage(0);

	// 		const sortedRows = stableSort(rows, getComparator(order, orderBy));
	// 		const updatedRows = sortedRows.slice(
	// 			0 * updatedRowsPerPage,
	// 			0 * updatedRowsPerPage + updatedRowsPerPage
	// 		);
	// 		setVisibleRows(updatedRows);

	// 		// There is no layout jump to handle on the first page.
	// 		setPaddingHeight(0);
	// 	},
	// 	[order, orderBy]
	// );

	const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDense(event.target.checked);
	};

	const isSelected = (rank: number) => selected.indexOf(rank) !== -1;

	const paginatedData =
		(!!orderBy && !!rows
			? stableSort(rows as any, getComparator(order, orderBy))
			: rows || []
		).slice(page * rowsPerPage, (page + 1) * rowsPerPage) || [];

	return (
		<Box sx={{width: '100%'}}>
			<Paper sx={{width: '100%', mb: 2}}>
				<EnhancedTableToolbar numSelected={selected.length} />
				<TableContainer>
					<Table
						sx={{minWidth: 750}}
						aria-labelledby="tableTitle"
						size={dense ? 'small' : 'medium'}
					>
						<EnhancedTableHead
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={() => {}}
							rowCount={rows.length}
						/>
						<TableBody>
							{paginatedData
								? paginatedData.map((row, index) => {
										const isItemSelected = isSelected(row.rank as number);
										const labelId = `enhanced-table-checkbox-${index}`;

										return (
											<PlayerRow
												key={row.rank}
												row={row as Player}
												isSelected={isSelected}
												handleClick={handleClick}
											/>
										);
								  })
								: null}
							{paddingHeight > 0 && (
								<TableRow
									style={{
										height: paddingHeight,
									}}
								>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={() => {}}
					onRowsPerPageChange={() => {}}
				/>
			</Paper>
		</Box>
	);
}
