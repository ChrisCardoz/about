import React, {memo} from 'react';

interface Props {
	size: number;
	div?: boolean;
}

const Padding = memo<Props>((props) => {
	const {div, size} = props;

	if (!!div) return <div style={{paddingTop: size}} />;
	return <span style={{paddingTop: size}} />;
});

Padding.displayName = 'Padding';

export default Padding;
