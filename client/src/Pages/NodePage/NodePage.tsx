import React from 'react';
import axios from 'axios';

const NodePage: React.FC = () => {
	const pingServer:() => void = async () => {
		const data:Object = await axios.get('/api/ping').then(data => data.data);
		console.log(data);
	};

	return (
		<>
			<button onClick={pingServer}>Ping server</button>
		</>
	);
};

export default NodePage;
