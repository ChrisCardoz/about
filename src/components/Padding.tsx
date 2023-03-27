import React, {FC} from 'react';

const Padding: FC<{size: number; div?: boolean}> = (props) => {
	if (!!props.div) return <div style={{paddingTop: props.size}} />;
	return <span style={{paddingTop: props.size}} />;
};

export default Padding;
