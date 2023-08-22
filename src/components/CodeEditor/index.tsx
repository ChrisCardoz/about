import React from 'react';
import {render} from 'react-dom';
import AceEditor, {IAceEditorProps} from 'react-ace';
import Box from '@mui/material/Box';
import {styled} from '@mui/system';
import Head from 'next/head';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/ext-language_tools';

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

const Editor = (props: any) => {
	const aceProps: IAceEditorProps = {
		mode: 'SQL',
		theme: 'dracula',
		onChange: onChange,
		name: 'example',
		editorProps: {$blockScrolling: true},
		style: {
			width: '100%',
		},
	};
	return (
		<Container>
			<Head>
				<style>{editorStyles}</style>
				{/* <style>{!darkMode ? light_style : dark_style}</style> */}
			</Head>

			<Box>
				<Box id="example"></Box>

				{/* @ts-ignore */}
				<AceEditor {...aceProps} />
			</Box>
		</Container>
	);
};

export default Editor;
