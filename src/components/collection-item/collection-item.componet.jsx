import React from 'react';
import { connect } from 'react-redux';

import { Col } from 'react-bootstrap';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;

	return (
		<Col md={3}>
			<div className='collection-item'>
				<div
					className='image'
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				/>
				<div className='collection-footer'>
					<span className='name'>{name}</span>
					<span className='price'>{price}</span>
				</div>
				<CustomButton onClick={() => addItem(item)} inverted>
					Add to Cart
				</CustomButton>
			</div>
		</Col>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
