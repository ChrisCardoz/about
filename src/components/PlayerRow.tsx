import {useState, memo} from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import {Player} from '../helpers/types';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {styled} from '@mui/system';

const minTableWidth = 220;

const WideTableCell = styled(TableCell)`
	min-width: ${minTableWidth}px;
`;

interface Props {
	row: Partial<Player>;
}

const PlayerRow = memo<Props>((props) => {
	const {row} = props;

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const labelId = `enhanced-table-checkbox-${row.rank}`;

	return (
		<TableRow hover role="checkbox" tabIndex={-1} key={row.name} sx={{cursor: 'pointer'}}>
			<TableCell id={labelId} align="center" padding="checkbox">
				{row.rank}
			</TableCell>
			<WideTableCell align="left">
				<Grid container direction="row" alignItems="center">
					<Avatar alt={row.name as string} src={row.img as string} />

					<div style={{paddingLeft: 16}}>{row.name}</div>
				</Grid>
			</WideTableCell>
			<TableCell align="left">{row.team}</TableCell>
			<TableCell align="left">{row.position}</TableCell>
			<TableCell align="left">
				{(row.rate as number[])?.length
					? `${(row.rate as number[])[0]} | ${(row.rate as number[])[1]}`
					: row.rate}
			</TableCell>
			<TableCell align="left">{row.war}</TableCell>
			<TableCell align="right">
				<IconButton onClick={handleMenuClick}>
					<MoreVertIcon />
				</IconButton>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					<MenuItem onClick={handleClose}>
						<Link href={row.links?.bR} target="blank">
							Baseball Reference
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link href={row.links?.fG} target="blank">
							Fan Graphs
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link href={row.links?.bS} target="blank">
							Baseball Savant
						</Link>
					</MenuItem>
				</Menu>
			</TableCell>
		</TableRow>
	);
});

PlayerRow.displayName = 'PlayerRow';

export default PlayerRow;
