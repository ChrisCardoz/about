import {memo, ReactNode} from 'react';
import Grid from '@mui/material/Grid';
import useIsMobile, {useIsBigScreen, backgroundHeight} from '../helpers/useIsMobile';

interface Props {
	children: ReactNode;
}

const CenterGrid = memo<Props>((props) => {
	const isMobile = useIsMobile();
	const isBigScreen = useIsBigScreen();

	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="flex-start"
			style={{
				height: isBigScreen
					? `calc(${backgroundHeight}px - ${isMobile ? 140 : 80}px)`
					: `calc(100vh - ${isMobile ? 140 : 80}px)`,
				padding: isMobile ? 24 : 64,
				paddingBottom: 0,
			}}
		>
			<Grid container direction="row" justifyContent="center" alignItems="center">
				{props.children}
			</Grid>
		</Grid>
	);
});

CenterGrid.displayName = 'CenterGrid';

export default CenterGrid;
