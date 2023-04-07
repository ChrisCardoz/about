import {useState, useEffect} from 'react';
import {Typography} from '@mui/material';
import PlayerTable from '../src/components/PlayerTable';
import Padding from '@/src/components/Padding';

const Mlb = () => {
	const [response, setResponse] = useState();

	return (
		<div>
			<Typography>Top 30 Players for 2023</Typography>
			<div style={{padding: 32}}>
				<PlayerTable />
			</div>
		</div>
	);
};

export default Mlb;
