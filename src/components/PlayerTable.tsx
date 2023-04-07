import * as React from 'react';
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
	IconButton,
	Tooltip,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import {visuallyHidden} from '@mui/utils';
import {getComparator, Order, stableSort, EnhancedTableProps} from '../helpers/table';
import {Player} from '../helpers/types';
import PlayerRow from './PlayerRow';
import rows from '../helpers/topPlayers';
import {headCells} from '../helpers/table';

const DEFAULT_ORDER = 'asc';
const DEFAULT_ORDER_BY = 'rank';
const DEFAULT_ROWS_PER_PAGE = 10;

function EnhancedTableHead(props: EnhancedTableProps) {
	const {order, orderBy, rowCount, onRequestSort} = props;
	const createSortHandler =
		(newOrderBy: keyof Player) => (event: React.MouseEvent<unknown>) => {
			onRequestSort(event, newOrderBy);
		};

	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.id === 'links' ? 'right' : 'left'}
						padding={
							headCell.id === 'rank'
								? 'checkbox'
								: headCell.disablePadding
								? 'none'
								: 'normal'
						}
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

function EnhancedTableToolbar() {
	return (
		<Toolbar
			sx={{
				pl: {sm: 2},
				pr: {xs: 1, sm: 1},
			}}
		>
			<Typography sx={{flex: '1 1 100%'}} variant="h6" id="tableTitle" component="div">
				Too 50 Players
			</Typography>

			<Tooltip title="Filter list">
				<IconButton>
					<FilterListIcon />
				</IconButton>
			</Tooltip>
		</Toolbar>
	);
}

export default function EnhancedTable() {
	const [order, setOrder] = React.useState<Order>(DEFAULT_ORDER);
	const [orderBy, setOrderBy] = React.useState<keyof Player>(DEFAULT_ORDER_BY);

	const [page, setPage] = React.useState(0);

	const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
	const [paddingHeight, setPaddingHeight] = React.useState(0);

	const paginatedData =
		(!!orderBy && !!rows
			? stableSort(rows as any, getComparator(order, orderBy))
			: rows || []
		).slice(page * rowsPerPage, (page + 1) * rowsPerPage) || [];

	return (
		<Box sx={{width: '100%'}}>
			<Paper sx={{width: '100%', mb: 2}}>
				<EnhancedTableToolbar />
				<TableContainer>
					<Table sx={{minWidth: 750}} aria-labelledby="tableTitle" size={'medium'}>
						<EnhancedTableHead
							order={order}
							orderBy={orderBy}
							onRequestSort={() => {}}
							rowCount={rows.length}
						/>
						<TableBody>
							{paginatedData
								? paginatedData.map((row, index) => {
										const labelId = `enhanced-table-checkbox-${index}`;

										return <PlayerRow key={row.rank} row={row as Player} />;
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
