import {createTheme} from '@mui/material/styles';
import colors from './colors';

export const standardPalette = {
	primary: {
		main: colors.secondaryLight,
		dark: colors.secondary,
		contrastText: colors.white,
	},
	secondary: {
		main: colors.primary,
		contrastText: colors.white,
	},
};

// Create a theme instance.
export const theme = createTheme({
	palette: {
		...standardPalette,
		mode: 'dark',
	},
});

export default theme;
