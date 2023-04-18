import {FC, ReactNode} from 'react';
import {Grid} from '@mui/material';

interface Props {
	children: ReactNode;
}

const CenterGrid: FC<Props> = (props) => {
	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="flex-start"
			style={{height: 'calc(100vh - 80px)', padding: 64}}
		>
			<Grid container direction="row" justifyContent="center" alignItems="center">
				{props.children}
			</Grid>
		</Grid>
	);
};

export default CenterGrid;
