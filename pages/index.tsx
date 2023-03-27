import {Button, Typography, Grid} from '@mui/material';
import CenterGrid from '@/src/components/CenterGrid';
import Footer from '@/src/components/Footer';
import Padding from '@/src/components/Padding';
import Head from 'next/head';

export default function Index() {
	return (
		<>
			<Head>
				<title>Chris Cardoz</title>
			</Head>
			<CenterGrid>
				<Grid container direction="row" justifyContent="center">
					<Typography style={{fontFamily: 'MLB Tuscan'}} variant="h1">
						Chris Cardoz
					</Typography>
				</Grid>
				<Padding size={130} />
				<Grid container direction="row" justifyContent="center">
					<Typography style={{fontFamily: 'MLB Tuscan'}} variant="h6">
						SOFTWARE ENGINEER | UI DESIGNER | NEW YORK, NY
					</Typography>
				</Grid>

				{/* <Button variant="contained">Click me!</Button> */}
			</CenterGrid>
			<Footer />
		</>
	);
}
