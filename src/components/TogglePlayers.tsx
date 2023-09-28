import {FC} from 'react';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

interface Props {
	activeChip: string;
	handleClick: (newChip: string) => void;
}

const TogglePlayers: FC<Props> = (props) => {
	const {activeChip, handleClick} = props;

	return (
		<Grid container direction={'row'} style={{width: '100%'}} spacing={1}>
			<Grid item xs />
			<Grid item>
				<Chip
					label="All"
					clickable
					variant={activeChip === 'all' ? 'filled' : 'outlined'}
					onClick={() => handleClick('all')}
				/>
			</Grid>
			<Grid item>
				<Chip
					label="Pitchers"
					clickable
					variant={activeChip === 'pitchers' ? 'filled' : 'outlined'}
					onClick={() => handleClick('pitchers')}
				/>
			</Grid>
			<Grid item>
				<Chip
					label="Hitters"
					clickable
					variant={activeChip === 'hitters' ? 'filled' : 'outlined'}
					onClick={() => handleClick('hitters')}
				/>
			</Grid>
			<Grid item xs />
		</Grid>
	);
};

export default TogglePlayers;
