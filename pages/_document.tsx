import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import {cache} from '@emotion/css';

const {extractCriticalToChunks} = createEmotionServer(cache);

class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		const emotionStyles = extractCriticalToChunks(initialProps.html);
		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					{emotionStyles.styles.map((style) => (
						<style
							data-emotion={`${style.key} ${style.ids.join(' ')}`}
							key={style.key}
							dangerouslySetInnerHTML={{__html: style.css}}
						/>
					))}
				</>
			),
		};
	}

	render() {
		return (
			<Html>
				<Head>{/* Add any necessary meta tags here */}</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
