import React from 'react';

import { Row } from 'react-bootstrap';
import CollectionItem from '../collection-item/collection-item.componet';

import './collection-preview.componet';

const CollectionPreview = ({ title, items }) => (
	<div className='collection-preview'>
		<h1 className='title'>{title.toUpperCase()}</h1>
		<div className='preview'>
			<Row>
				{items
					.filter((item, idx) => idx < 4)
					.map(({ id, ...otherItemProps }) => (
						<CollectionItem key={id} {...otherItemProps} />
					))}
			</Row>
		</div>
	</div>
);

export default CollectionPreview;
