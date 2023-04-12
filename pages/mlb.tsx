import {Typography, Grid} from '@mui/material';
import PlayerTable from '../src/components/PlayerTable';
import Padding from '@/src/components/Padding';
import Footer from '@/src/components/Footer';
import MetsFont from '@/src/components/MetsFont';

const Mlb = () => {
	return (
		<div>
			<div style={{padding: 32}}>
				<Grid container direction="row" justifyContent="center">
					<MetsFont variant="h4">Top 30 Players for 2023</MetsFont>
				</Grid>
				<Padding size={24} div />
				<PlayerTable />
			</div>
			<Footer />
		</div>
	);
};

export default Mlb;
