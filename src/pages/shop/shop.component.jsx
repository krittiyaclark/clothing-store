import React from 'react';

import { Container } from 'react-bootstrap';
import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.componet';

class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<Container className='shop-page'>
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</Container>
		);
	}
}

export default ShopPage;
