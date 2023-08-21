import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';

export const backgroundHeight = 1220;

const useIsMobile = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return isMobile;
};

export const useIsMed = () => {
	const theme = useTheme();
	const isMed = useMediaQuery(theme.breakpoints.down('md'));
	return isMed;
};

export const useIsBigScreen = () => {
	const isBigScreen = useMediaQuery(`(min-height: ${backgroundHeight}px)`);
	return isBigScreen;
};

export default useIsMobile;
