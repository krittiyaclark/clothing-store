import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';

import { Container, Row, Col } from 'react-bootstrap';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
	<Container>
		<Row>
			<Col>
				<div className='checkout-page'>
					<div className='checkout-header'>
						<div className='header-block'>
							<span>Product</span>
						</div>
						<div className='header-block'>
							<span>Description</span>
						</div>
						<div className='header-block'>
							<span>Quantity</span>
						</div>
						<div className='header-block'>
							<span>Price</span>
						</div>
						<div className='header-block'>
							<span>Remove</span>
						</div>
					</div>
					{cartItems.map((cartItem) => (
						<CheckoutItem key={cartItem.id} cartItem={cartItem} />
					))}
					<div className='total'>TOTAL: ${total}</div>
				</div>
			</Col>
		</Row>
	</Container>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
