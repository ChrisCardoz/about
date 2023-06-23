import {memo} from 'react';
import Head from 'next/head';
import Footer from '@/src/components/Footer';
import OperatorLogo from '@/src/components/OperatorLogo';
import {Typography, Grid} from '@mui/material';
import Padding from '@/src/components/Padding';
import ResponsiveImage from '@/src/components/ResponsiveImage';
import {useIsMed} from '@/src/helpers/useIsMobile';
import Swatch from '@/src/components/Swatch';
import StyledLabel from '@/src/components/StyledLabel';

interface Section {
	src: string;
	caption: string;
	title: string;
}

const sections: Section[] = [
	{
		src: '/search-home.png',
		caption: `Here is the main page of Operator. The site uses OpenAI, OpenSearch and
	additional database tools on the backend to translate text into sql queries of
	our backend database of historical crypto data. You can select a specific blockchains 
	like Ethereum and Polygon to get more accurate results. There are also example queries 
	for the user to get started.`,
		title: 'Home Page',
	},
	{
		src: '/search-table-view.png',

		caption: `Here is the results page of Operator. You can sort and filter the data, and
		download it as a CSV. You can also view the SQL code used to query the
		backend. You can tweet out the results as well. Urls listed in the table link to 
		external websites like OpenSea, Etherscan, and DexTools.`,
		title: 'Search Results',
	},
];

const Design = memo(() => {
	const isMed = useIsMed();

	const paddingSize = isMed ? 32 : 96;

	return (
		<>
			<Head>
				<title>{`Chris's Designs for Operator`}</title>
			</Head>
			<div
				style={{
					padding: paddingSize,
					paddingBottom: 4,
					paddingTop: paddingSize,
					alignContent: 'center',
					textAlign: 'center',
				}}
			>
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
				<Padding size={paddingSize} div />

				{sections.map((item, index) => {
					const isEven = index % 2;

					return (
						<>
							{index === 0 ? null : <Padding size={32} div />}
							<>
								{isMed || !isEven ? (
									<Grid
										container
										direction="row"
										alignItems="center"
										justifyContent={'center'}
										spacing={8}
									>
										<Grid item xs={12} md={6} style={{textAlign: 'start'}}>
											<StyledLabel>{item.title}</StyledLabel>
											<Padding size={4} div />
											{item.caption}
										</Grid>
										<Grid item xs={12} md={6}>
											<ResponsiveImage src={item.src} alt={item.title} />
										</Grid>
									</Grid>
								) : (
									<Grid
										container
										direction="row"
										alignItems="center"
										justifyContent={'center'}
										spacing={8}
									>
										<Grid item xs={12} md={6}>
											<ResponsiveImage src={item.src} alt={item.title} />
										</Grid>
										<Grid item xs={12} md={6} style={{textAlign: 'end'}}>
											<StyledLabel>{item.title}</StyledLabel>
											<Padding size={4} div />
											{item.caption}
										</Grid>
									</Grid>
								)}
							</>
							<Padding size={paddingSize} div />
						</>
					);
				})}

				<Padding size={isMed ? 16 : 0} div />
				<StyledLabel>Color Pallette</StyledLabel>
				<Padding size={isMed ? 16 : 32} div />
				<Swatch />
			</div>
			<Footer />
		</>
	);
});

Design.displayName = 'Design';

export default Design;
