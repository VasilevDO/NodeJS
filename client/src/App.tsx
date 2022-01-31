import React from 'react';
import Footer from './Components/Footer/Footer';

import Header from './Components/Header/Header';
import NodePage from './Pages/NodePage/NodePage';

const App: React.FC = () => (
	<>
		<Header/>
		<div className="content">
			<NodePage/>
		</div>
		<Footer/>
	</>
);

export default App;
