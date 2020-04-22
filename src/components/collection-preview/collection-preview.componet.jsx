import React from 'react';

import { Row, Col } from 'react-bootstrap';
import CollectionItem from '../collection-item/collection-item.componet';

import './collection-preview.componet';

const CollectionPreview = ({ title, items }) => (
	<div className='collection-preview'>
		<h1 className='title'>{title.toUpperCase()}</h1>
		<div className='preview'>
			<Row>
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<Col md={3} key={item.id}>
							<CollectionItem item={item} />
						</Col>
					))}
			</Row>
		</div>
	</div>
);

export default CollectionPreview;
