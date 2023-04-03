import {useState, useEffect} from 'react';
import PlayerTable from '../src/components/PlayerTable';

const Mlb = () => {
	const [response, setResponse] = useState();

	return (
		<div>
			top mlb: <br />
			<PlayerTable />
		</div>
	);
};

export default Mlb;
