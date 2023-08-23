import {memo} from 'react';
import Head from 'next/head';
import Footer from '@/src/components/Footer';
import OperatorLogo from '@/src/components/OperatorLogo';
import {Typography, Grid, ButtonBase, Tooltip, Link} from '@mui/material';
import Padding from '@/src/components/Padding';
import ResponsiveImage from '@/src/components/ResponsiveImage';
import {useIsMed} from '@/src/helpers/useIsMobile';
import Swatch from '@/src/components/Swatch';
import StyledLabel from '@/src/components/StyledLabel';
import Image from 'next/image';
import Mockup from '../src/components/CodeEditor/Mockup';
import dynamic from 'next/dynamic';
import React from 'react';
import Box from '@mui/material/Box';

const CodeEditor = dynamic(() => import('../src/components/CodeEditor'), {ssr: false});
interface Section {
	src: string;
	caption: string;
	title: string;
}

const sections: Section[] = [
	{
		src: '/search-home.png',
		caption: `Users type questions into the search bar. Their raw text is processed using 
		OpenSearch to generate a series of text prompts for OpenAI. Then OpenAI generates a 
		SQL query that is sent to our backend. The user may select a blockchain to improve the
		prompt generation.`,
		title: 'Home Page',
	},
	{
		src: '/search-table-view.png',

		caption: `The user can sort, filter and download the raw data that's returned from the backend. You can also view the SQL code used to query the
		backend. Urls listed in the table link to external websites like OpenSea, Etherscan, and DexTools.`,
		title: 'Search Results',
	},
];

const npmTitle = 'View on Node Package Manager';

const Design = memo(() => {
	const isMed = useIsMed();

	const paddingSize = isMed ? 32 : 96;

	return (
		<>
			<Head>
				<title>{`Chris's Work for Operator`}</title>
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
					Operator is a startup formed in Late 2019 and was backed by Y-Combinator in
					Spring 2020. While working full-time for Operator, I worked as a Full Stack
					Engineer and Product Developer. I constructed the frontend codebase using
					Next.js with Typescript, Redux, and Material-UI. I contributed to the the API
					layer of backend codebase, written in Express.js. I was also responsible for
					designing the user interfaces and mockups, working mostly in Figma.
				</Typography>
				<Padding size={paddingSize} div />

				<Grid
					container
					direction="row"
					alignItems="center"
					justifyContent={'center'}
					spacing={8}
				>
					<Grid item xs={12} md={6}>
						<StyledLabel>Figma Mockup</StyledLabel>
						<Padding size={24} div />
						<Mockup />
					</Grid>
					<Grid item xs={12} md={6}>
						<StyledLabel>Ace Editor (TRY ME)</StyledLabel>
						<Padding size={16} div />
						<CodeEditor />
					</Grid>
				</Grid>

				<Padding size={16} div />

				<Typography>
					For making SQL queries, I created a Figma Mockup using our company colors then
					implemented it using{' '}
					<Link href="https://ace.c9.io/" target="_blank">
						Ace Editor.
					</Link>
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
				<StyledLabel>Operator Styles</StyledLabel>
				<Typography>
					I created an npm package to share styles and components across projects.
				</Typography>
				<Padding size={8} div />
				<ButtonBase
					href="https://www.npmjs.com/package/@atana/operator-styles"
					target="_blank"
				>
					<Tooltip title={npmTitle}>
						<Image width="120" height="47" src={'/npm-logo.png'} alt={npmTitle} />
					</Tooltip>
				</ButtonBase>
				<Padding size={isMed ? 16 : 32} div />
				<Swatch />
			</div>
			<Footer />
		</>
	);
});

Design.displayName = 'Design';

export default Design;
