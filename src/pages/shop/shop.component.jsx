import React from 'react';
import { Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import CollectionsOverview from '../../components/collection-overview/collection-overview.componet';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
	<Container className='shop-page'>
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
	</Container>
);

export default ShopPage;
