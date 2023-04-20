import {useState, MouseEvent} from 'react';
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
	Paper,
	Chip,
	Grid,
	Tooltip,
} from '@mui/material';
import {visuallyHidden} from '@mui/utils';
import {
	getComparator,
	Order,
	stableSort,
	EnhancedTableProps,
	isPitcher,
	isHitter,
} from '../helpers/table';
import {Player} from '../helpers/types';
import PlayerRow from './PlayerRow';
import rows from '../helpers/topPlayers';
import {headCells} from '../helpers/table';
import TogglePlayers from './TogglePlayers';
import Padding from './Padding';
import InfoIcon from '@mui/icons-material/Info';

const DEFAULT_ORDER = 'asc';
const DEFAULT_ORDER_BY = 'rank';
const DEFAULT_ROWS_PER_PAGE = 8;

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
						padding={headCell.disablePadding ? 'none' : 'normal'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{headCell.id === 'rate' ? (
								<Tooltip
									title={
										<div>
											<span>OPS+ used for hitters</span>
											<br />
											<span>ERA+ used for pitchers</span>
											<br />
											<span>100 is league average</span>
										</div>
									}
									placement="top"
								>
									<InfoIcon sx={{fontSize: 16, marginLeft: 1}} />
								</Tooltip>
							) : null}
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

export default function EnhancedTable() {
	const [order, setOrder] = useState<Order>(DEFAULT_ORDER);
	const [orderBy, setOrderBy] = useState<keyof Player>(DEFAULT_ORDER_BY);

	const [page, setPage] = useState(0);

	const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);
	const [paddingHeight, setPaddingHeight] = useState(0);

	const [activeChip, setActiveChip] = useState('all');

	const handleRequestSort = (event: MouseEvent<unknown>, property: keyof Player) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleChipClick = (newChip: string) => {
		setActiveChip(newChip);
	};

	const filteredRows =
		activeChip === 'pitchers'
			? rows.filter((row) => isPitcher(row.position))
			: activeChip === 'hitters'
			? rows.filter((row) => isHitter(row.position))
			: rows;

	const paginatedData =
		(!!orderBy && !!filteredRows
			? stableSort(filteredRows as any, getComparator(order, orderBy))
			: filteredRows || []
		).slice(page * rowsPerPage, (page + 1) * rowsPerPage) || [];

	return (
		<Box sx={{width: '100%'}}>
			<TogglePlayers activeChip={activeChip} handleClick={handleChipClick} />
			<Padding size={16} div />
			<Paper sx={{width: '100%', mb: 2}}>
				<TableContainer>
					<Table sx={{minWidth: 750}} aria-labelledby="tableTitle" size={'medium'}>
						<EnhancedTableHead
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
							rowCount={rows.length}
						/>
						<TableBody>
							{paginatedData
								? paginatedData.map((row, index) => {
										return <PlayerRow key={row.rank} row={row as Player} />;
								  })
								: null}
							{paddingHeight > 0 && (
								<TableRow
									style={{
										height: paddingHeight,
									}}
								>
									<TableCell />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={filteredRows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</Box>
	);
}
