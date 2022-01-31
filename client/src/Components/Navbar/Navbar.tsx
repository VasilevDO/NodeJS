import React from 'react';

import './Navbar.scss';

const Navbar: React.FC = () => (
	<nav className="nav-main">
		<ul>
			<li>
				<a href="#">Home</a>
			</li>
			<li>
				<a href="#">Prone</a>
			</li>
		</ul>
	</nav>
);

export default Navbar;
