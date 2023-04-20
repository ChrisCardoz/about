import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';

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

export default useIsMobile;
