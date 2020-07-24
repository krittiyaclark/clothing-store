import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Container, Navbar, Nav } from 'react-bootstrap'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { ReactComponent as Logo } from '../../assests/crown.svg'

import './header.styles.scss'

const Header = ({ currentUser, hidden }) => (
	<Container>
		<Navbar sticky='top' expand='lg' bg='light' id='header'>
			<Navbar.Brand>
				<Link to='/' className='logo-container'>
					<Logo className='logo' />
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse
				id='basic-navbar-nav'
				className='options justify-content-end'>
				<Nav className='header-options'>
					<Link to='/shop' className='option'>
						Shop
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
					<CartIcon />
					{hidden ? null : <CartDropdown />}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Container>
)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
