import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Navbar, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => (
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
					{currentUser ? (
						<div className='option' onClick={() => auth.signOut()}>
							{' '}
							Sign Out
						</div>
					) : (
						<Link to='/signin' className='option'>
							Sign In
						</Link>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Container>
);

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
