import React from 'react';

import { Col } from 'react-bootstrap';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
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
		</div>
	</Col>
);

export default CollectionItem;
