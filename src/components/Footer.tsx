import {
	Typography,
	Hidden,
	Grid,
	Link as MuiLink,
	Button as MuiButton,
} from '@mui/material';
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

const Button = styled(MuiButton)`
	${linkCss}
`;

const Footer = () => {
	const router = useRouter();
	return (
		<>
			{/* {loadResults ? null : (
				<Hidden mdDown>
					<div
						style={{
							height: '100%',

							color: colors.blueGrey,
							textAlign: 'center',
						}}
					>
						<Typography role={undefined}>{titles.description}</Typography>
					</div>
				</Hidden>
			)} */}
			<Grid container direction="row" justifyContent="center">
				{/* <Link onClick={onSuggestClick} style={{ cursor: 'pointer' }}>
					index
				</Link> */}

				<Link href="Resume2023.pdf" target="_blank">
					resume
				</Link>

				<Link href="" target="_blank">
					design examples
				</Link>
				<Link onClick={() => router.push('/mlb')}>top 50 mlb players</Link>
			</Grid>
			<Hidden mdUp>
				<Padding size={16} />
			</Hidden>
		</>
	);
};

export default Footer;
