import {FC} from 'react';
import {TableCell, TableRow, Checkbox, Avatar, Grid} from '@mui/material';
import {Player} from '../helpers/types';

interface Props {
	isSelected: (rank: number) => boolean;
	handleClick: (event: React.MouseEvent<unknown>, rank: number) => void;
	row: Partial<Player>;
}

const PlayerRow: FC<Props> = (props) => {
	const {isSelected, row, handleClick} = props;

	const isItemSelected = isSelected(row.rank as number);
	const labelId = `enhanced-table-checkbox-${row.rank}`;

	return (
		<TableRow
			hover
			onClick={(event) => handleClick(event, row.rank as number)}
			role="checkbox"
			aria-checked={isItemSelected}
			tabIndex={-1}
			key={row.name}
			selected={isItemSelected}
			sx={{cursor: 'pointer'}}
		>
			<TableCell padding="checkbox">
				<Checkbox
					color="primary"
					checked={isItemSelected}
					inputProps={{
						'aria-labelledby': labelId,
					}}
				/>
			</TableCell>
			<TableCell id={labelId} align="left">
				{row.rank}
			</TableCell>
			<TableCell align="left">
				<Grid container direction="row" alignItems="center">
					<Avatar alt={row.name as string} src={row.img as string} />

					<div style={{paddingLeft: 8}}>{row.name}</div>
				</Grid>
			</TableCell>
			<TableCell align="left">{row.team}</TableCell>
			<TableCell align="left">{row.position}</TableCell>
			<TableCell align="left">{row.rank}</TableCell>
			<TableCell align="left">{row.war}</TableCell>
			<TableCell align="right">dots</TableCell>
		</TableRow>
	);
};

export default PlayerRow;
