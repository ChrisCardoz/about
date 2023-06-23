import React, {memo} from 'react';
import {Typography as MuiTypography} from '@mui/material';
import {styled} from '@mui/system';
import colors from '../theme/colors';

const fontSize = 16;

const Label = styled(MuiTypography)`
	text-transform: uppercase;
	color: ${colors.blueGrey};
	font-weight: 500;
	font-size: ${fontSize}px;
`;

const LowerLabel = styled(MuiTypography)`
	color: ${colors.blueGrey};
	font-weight: 500;
	font-size: ${fontSize}px;
`;

interface Props {
	lowerCase?: boolean;
	style?: object;
	children?: React.ReactNode;
}

const StyledLabel = memo<Props>((props) => {
	let {lowerCase, style} = props;

	return lowerCase ? (
		<LowerLabel style={{...style}}>{props.children}</LowerLabel>
	) : (
		<Label style={{...style}}>{props.children}</Label>
	);
});

StyledLabel.displayName = 'StyledLabel';

export default StyledLabel;
