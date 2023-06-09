import {memo} from 'react';
import styles from '../styles/home.module.css';
import {Grid, Hidden} from '@mui/material';
import CenterGrid from '@/src/components/CenterGrid';
import Footer from '@/src/components/Footer';
import Padding from '@/src/components/Padding';
import Head from 'next/head';
import MetsFont from '@/src/components/MetsFont';
import useIsMobile from '@/src/helpers/useIsMobile';

const Index = memo(() => {
	const isMobile = useIsMobile();
	return (
		<div className={styles.container} style={{height: '100vh', overflow: 'hidden'}}>
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
					<MetsFont variant={isMobile ? 'h3' : 'h1'}>Chris Cardoz</MetsFont>
				</Grid>
				<Grid container direction="row" justifyContent="center">
					<MetsFont variant="h6">SOFTWARE ENGINEER | UI DESIGNER | NEW YORK, NY</MetsFont>
				</Grid>
			</CenterGrid>
			<Footer />
		</div>
	);
});

Index.displayName = 'Index';

export default Index;
