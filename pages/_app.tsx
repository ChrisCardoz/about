import {CacheProvider} from '@emotion/react';
import {cache} from '@emotion/css';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme';
import type {AppProps} from 'next/app';

export default function MyApp({Component, pageProps}: AppProps) {
	return (
		<CacheProvider value={cache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
}
