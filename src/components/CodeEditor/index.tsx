import React from 'react';
import AceEditor from 'react-ace';
import Box from '@mui/material/Box';
import {styled} from '@mui/system';
import Head from 'next/head';
import 'ace-builds/src-noconflict/mode-pgsql';
import 'ace-builds/src-noconflict/ext-language_tools';
import {theme} from './theme';

const ScrollBox = styled('div')`
	height: 100%;
	width: 100%;
	display: flex;
	flex-wrap: nowrap;
	overflow-x: auto;
	overflow-y: auto;
`;

const Container = styled('div')`
	height: 100%;
	width: 100%;
	border-radius: 0px;
`;
function onChange(newValue: any) {
	console.log('change', newValue);
}

const editorStyles = `
.error_style {
  // position: absolute;
  background: url("https://atana-public-assets.s3.amazonaws.com/wavey-red.gif") bottom repeat-x;
}
.ace_autocomplete-tip {
  font-weight: bold;
}
/* 
  Hack to fix the fact that the right align class in ace that positions 
  the "meta" column of autocompletion items sends it 10000 px of the page
*/
.ace_rightAlignedText {
  position: relative;
  padding-left: 8px;
  font-size: 10px;
}
.ace_editor.ace_autocomplete {
  width: 400px;
}

.ace_scrollbar {
	overflow-y: hidden;
}
`;

const defaultText = `-- find total spent on sales or marketing expenses
SELECT
	ROUND(SUM(e.amount) / 100, 2)\t\t"Total",
	e.category\t\t\t\t\t\t\t"GL Account"
FROM expensify.expense e
	
-- restrict categories
WHERE e.category LIKE '%Sales%' OR e.category LIKE '%Marketing%'
GROUP BY e.category`;

const amtLines = 14;
const Editor = (props: any) => {
	const aceProps: any = {
		onChange: onChange,
		editorProps: {$blockScrolling: true},
		style: {
			width: 665,
		},
		fontSize: 11,
		maxLines: amtLines,
		minLines: amtLines,
		value: defaultText,
		mode: 'pgsql',
		showGutter: true,
		enableSnippets: true,
		enableBasicAutocompletion: true,
		enableLiveAutocompletion: true,
		showPrintMargin: false,
		highlightActiveLine: false,
	};
	return (
		<Container>
			<Head>
				<style>{editorStyles}</style>
				<style>{theme}</style>
			</Head>

			<Box style={{marginTop: -4}}>
				{/* @ts-ignore */}
				<AceEditor {...aceProps} />
			</Box>
		</Container>
	);
};

export default Editor;
