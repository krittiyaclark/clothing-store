import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import './header.styles.scss';

const Header = () => (
	<Container>
		<Navbar sticky='top' expand='lg' className='header'>
			<Link to='/' className='logo-container'>
				<Logo className='logo' />
			</Link>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse
				id='basic-navbar-nav'
				className='options justify-content-end'>
				<Nav>
					<Link to='/shop' className='option'>
						Shop
					</Link>
					<Link to='/contact' className='option'>
						Contact
					</Link>
					<Link to='/sign-in' className='option'>
						SignIn
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Container>
);

export default Header;
