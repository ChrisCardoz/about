import {Typography, Grid} from '@mui/material';
import PlayerTable from '../src/components/PlayerTable';
import Padding from '@/src/components/Padding';

const Mlb = () => {
	return (
		<div>
			<div style={{padding: 32}}>
				<Grid container direction="row" justifyContent="center">
					<Typography style={{fontFamily: 'MLB Tuscan'}} variant="h4">
						Top 30 Players for 2023
					</Typography>
				</Grid>
				<Padding size={24} div />
				<PlayerTable />
			</div>
		</div>
	);
};

export default Mlb;
