import {memo} from 'react';
import Grid from '@mui/material/Grid';
import PlayerTable from '../src/components/PlayerTable';
import Padding from '@/src/components/Padding';
import Footer from '@/src/components/Footer';
import MetsFont from '@/src/components/MetsFont';
import Head from 'next/head';
import Container from '@/src/components/Container';

const Mlb = memo(() => {
	return (
		<>
			<Head>
				<title>{`Chris's Top 30 MLB Players`}</title>
			</Head>
			<Container>
				<Grid container direction="row" justifyContent="center">
					<MetsFont variant="h4">Top 30 Players for 2023</MetsFont>
				</Grid>
				<Padding size={24} div />
				<PlayerTable />
			</Container>
			<Footer />
		</>
	);
});

Mlb.displayName = 'Mlb';

export default Mlb;
