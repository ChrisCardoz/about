import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';

const useIsMobile = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return isMobile;
};

export default useIsMobile;