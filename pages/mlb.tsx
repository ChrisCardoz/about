import {Typography, Grid} from '@mui/material';
import PlayerTable from '../src/components/PlayerTable';
import Padding from '@/src/components/Padding';
import Footer from '@/src/components/Footer';
import MetsFont from '@/src/components/MetsFont';
import Head from 'next/head';

const Mlb = () => {
	return (
		<>
			<Head>
				<title>{`Chris's Top 30 MLB Players`}</title>
			</Head>
			<div style={{padding: 32, paddingBottom: 4}}>
				<Grid container direction="row" justifyContent="center">
					<MetsFont variant="h4">Top 30 Players for 2023</MetsFont>
				</Grid>
				<Padding size={24} div />
				<PlayerTable />
			</div>
			<Footer />
		</>
	);
};

export default Mlb;
