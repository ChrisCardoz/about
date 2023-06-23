import {memo} from 'react';
import {styled} from '@mui/system';
import {Typography} from '@mui/material';

const MetsFont = memo(styled(Typography)`
	font-family: MLB Tuscan;
	text-align: center;
`);

export default MetsFont;
