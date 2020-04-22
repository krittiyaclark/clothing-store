import React from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'react-bootstrap';

import CollectionItem from '../../components/collection-item/collection-item.componet';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className='collection-page'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				<Row>
					{items.map((item) => (
						<Col md={3} key={item.id}>
							<CollectionItem item={item} />
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
