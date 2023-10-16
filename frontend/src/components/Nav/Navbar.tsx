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
					<ul className='link links-container'>
						<a>
							<li>
								<Link to='/About'>About</Link>
							</li>
						</a>
						<a>
							<li>
								<Link to='/help'>Help</Link>
							</li>
						</a>
						<a>
							<li>
								<Link to='/signUp'>Sign Up</Link>
							</li>
						</a>
						<a>
							<li>
								<Link to='/Login'>Login</Link>
							</li>
						</a>
						<a>
							<li>
								<Link to='/Contact'>Contact</Link>
							</li>
						</a>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Navbar;
