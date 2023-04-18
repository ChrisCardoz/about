import '../styles/Home.module.css';
import Head from 'next/head';
import Container from '@/src/components/Container';
import Footer from '@/src/components/Footer';
import OperatorLogo from '@/src/components/OperatorLogo';
import {Typography, Grid} from '@mui/material';
import Padding from '@/src/components/Padding';
import ResponsiveImage from '@/src/components/ResponsiveImage';
import useIsMobile from '@/src/helpers/useIsMobile';

interface Section {
	src: string;
	alt: string;
	caption: string;
}

const sections: Section[] = [
	{
		src: '/search-home.png',
		alt: 'Home Page',
		caption: `Here is the main page of Operator. The site uses OpenAI, OpenSearch and
	additional database tools on the backend to translate text into sql queries of
	our backend database of historical crypto data.`,
	},
	{
		src: '/search-table-view.png',
		alt: 'Search Results',
		caption: `Here is the results page of Operator. You can sort and filter the data, and
		download it as a CSV. You can also view the SQL code used to query the
		backend. You can tweet out the results as well.`,
	},
];

const Design = () => {
	const isMobile = useIsMobile();

	return (
		<>
			<Head>
				<title>{`Chris's Designs for Operator`}</title>
				<style>
					{`
						background: none; !important;
						body {
							background: none; !important;
						}
					`}
				</style>
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

				{sections.map((item, index) => {
					const isEven = index % 2;

					return (
						<>
							{index === 0 ? null : <Padding size={32} div />}
							<>
								{isMobile || !isEven ? (
									<Grid container direction="row" alignItems="center" spacing={4}>
										<Grid item xs={12} md={8}>
											{item.caption}
										</Grid>
										<Grid item xs={12} md={4}>
											<ResponsiveImage src={item.src} alt={item.alt} />
										</Grid>
									</Grid>
								) : (
									<Grid container direction="row" alignItems="center" spacing={4}>
										<Grid item xs={12} md={4}>
											<ResponsiveImage src={item.src} alt={item.alt} />
										</Grid>
										<Grid item xs={12} md={8}>
											{item.caption}
										</Grid>
									</Grid>
								)}
							</>
						</>
					);
				})}
				<Padding size={32} div />
			</Container>
			<Footer />
		</>
	);
};

export default Design;
