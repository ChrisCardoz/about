import React from 'react';
import {render} from 'react-dom';
import AceEditor, {IAceEditorProps} from 'react-ace';
import Box from '@mui/material/Box';

import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/ext-language_tools';

function onChange(newValue: any) {
	console.log('change', newValue);
}

const Editor = (props: any) => {
	const aceProps: IAceEditorProps = {
		mode: 'python',
		theme: 'dracula',
		onChange: onChange,
		name: 'example',
		editorProps: {$blockScrolling: true},
		style: {
			width: '100%',
		},
	};
	return (
		<Box>
			<Box id="example"></Box>

			{/* @ts-ignore */}
			<AceEditor {...aceProps} />
		</Box>
	);
};

export default Editor;
