import {Button, Typography, Grid, Hidden} from '@mui/material';
import CenterGrid from '@/src/components/CenterGrid';
import Footer from '@/src/components/Footer';
import Padding from '@/src/components/Padding';
import Head from 'next/head';
import MetsFont from '@/src/components/MetsFont';

export default function Index() {
	return (
		<>
			<Head>
				<title>Chris Cardoz</title>
			</Head>
			<CenterGrid>
				<Hidden mdDown>
					<Grid container direction="row" justifyContent="center">
						<Padding size={24} />
					</Grid>
				</Hidden>
				<Grid container direction="row" justifyContent="center">
					<MetsFont variant="h1">Chris Cardoz</MetsFont>
				</Grid>
				<Grid container direction="row" justifyContent="center">
					<MetsFont variant="h6">SOFTWARE ENGINEER | UI DESIGNER | NEW YORK, NY</MetsFont>
				</Grid>
			</CenterGrid>
			<Footer />
		</>
	);
}
