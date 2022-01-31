import React from 'react';
import Navbar from '../Navbar/Navbar';

import './Header.scss';

const Header = () => (
	<div className="header">
		<span className="logo">TypeScript</span>
		<Navbar/>
	</div>
);

export default Header;
