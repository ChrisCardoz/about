import {Grid, Link as MuiLink} from '@mui/material';
import {styled} from '@mui/system';
import Padding from './Padding';
import {useRouter} from 'next/router';

const linkCss = `
	text-transform: none;
	text-decoration: none;
	padding: 8px;
	padding-left: 16px;
	padding-right: 16px;
  font-size: .85rem;
	&:hover {
		cursor: pointer;
    background: transparent;
	}
`;

const Link = styled(MuiLink)`
	${linkCss}
`;

const Footer = () => {
	const router = useRouter();
	return (
		<>
			<Grid container direction="row" justifyContent="center">
				<Link onClick={() => router.push('/')}>home</Link>

				<Link href="Resume2023.pdf" target="_blank">
					resume
				</Link>

				<Link onClick={() => router.push('/design')}>operator.io designs</Link>
				<Link onClick={() => router.push('/mlb')}>top mlb players 2023</Link>
				<Link href="https://github.com/ChrisCardoz/about" target="_blank">
					source code
				</Link>
			</Grid>
			<Padding size={32} div />
		</>
	);
};

export default Footer;
