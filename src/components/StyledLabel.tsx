import React, {memo} from 'react';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';
import colors from '../theme/colors';

const fontSize = 16;

const Label = styled(Typography)`
	text-transform: uppercase;
	color: ${colors.blueGrey};
	font-weight: 500;
	font-size: ${fontSize}px;
`;

const LowerLabel = styled(Typography)`
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
