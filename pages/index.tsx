import {Button, Typography, Grid} from '@mui/material';
import CenterGrid from '@/src/components/CenterGrid';

export default function MyComponent() {
	return (
		<CenterGrid>
			<Grid container direction="row" justifyContent="center">
				<Typography style={{fontFamily: 'MLB Tuscan'}} variant="h1">
					Christopher Cardoz
				</Typography>
			</Grid>

			<Grid container direction="row" justifyContent="center">
				<Typography style={{fontFamily: 'MLB Tuscan'}} variant="h5">
					SOFTWARE ENGINEER | UI DESIGNER | NEW YORK, NY
				</Typography>
			</Grid>

			{/* <Button variant="contained">Click me!</Button> */}
		</CenterGrid>
	);
}
