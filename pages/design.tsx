import Head from 'next/head';
import Container from '@/src/components/Container';
import Footer from '@/src/components/Footer';
import OperatorLogo from '@/src/components/OperatorLogo';
import Image from 'next/image';
import {Typography, Grid} from '@mui/material';
import Padding from '@/src/components/Padding';
import ResponsiveImage from '@/src/components/ResponsiveImage';

const Design = () => {
	return (
		<>
			<Head>
				<title>{`Chris's Designs for Operator`}</title>
			</Head>
			<Container>
				<OperatorLogo />
				<Padding size={44} div />
				<Typography>
					Operator is a software company formed in Late 2019 and was backed by
					Y-Combinator in Spring 2020. While working full-time for Operator, I worked
					primary as a Product Designer and Front-End Engineer. My job entailed
					researching software product-spaces, creating product design spec-sheets,
					mocking up designs based on spec-sheets, and implementing the designs. I worked
					primarily in Google Docs to create spec sheets, often using images and urls to
					reference existing competitive apps, and in Figma to create mock-ups. If
					additional graphic design or re-coloring of logos was needed, I would use Sketch
					for image editing and vector drawing. The frontend is written in React.ts using
					the Next.js framework. The user interfaces were built primarily using the Google
					Material UI library.
				</Typography>
				<Padding size={32} div />

				<Grid container direction="row" alignItems="center" spacing={2}>
					<Grid item xs={12} md={6}>
						<ResponsiveImage src="/search-home.png" alt="Home page" />
					</Grid>

					<Grid item xs={12} md={6}>
						Here is the main page of Operator. The site uses OpenAI, OpenSearch and
						additional database tools on the backend to translate text into sql queries of
						our backend database of historical crypto data.
					</Grid>
				</Grid>

				<Padding size={32} div />

				<Grid container direction="row" alignItems="center">
					<Grid item xs={12} md={6}>
						Here is the results page of Operator. You can sort and filter the data, and
						download it as a CSV. You can also view the SQL code used to query the
						backend. You can tweet out the results as well.
					</Grid>
					<Grid item xs={12} md={6}>
						<ResponsiveImage src="/search-table-view.png" alt="Search Results" />
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</>
	);
};

export default Design;
