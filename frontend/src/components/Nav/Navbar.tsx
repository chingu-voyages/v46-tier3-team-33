import logo from '/src/assets/logo.svg';
import './Navbar.css';

import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<>
			<div className='navbar'>
				<a href='/'>
					<img src={logo} className='logo' alt='logo' />
				</a>
				<div className='links-container'>
					<ul className='links-container'>
						<li className='link'>
							<Link to='/About' className='link'>
								About
							</Link>
						</li>
						<li>
							<Link to='/help' className='link'>
								Help
							</Link>
						</li>
						<li>
							<Link to='/signUp' className='link'>
								Sign Up
							</Link>
						</li>
						<li>
							<Link to='/Login' className='link'>
								Login
							</Link>
						</li>
						<li>
							<Link to='/Contact' className='link'>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Navbar;
