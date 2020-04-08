import React from 'react';

import Directory from '../components/directory/directory.components';

import { Container } from 'react-bootstrap';

import './homepages.components';

const HomePage = () => (
	<Container className='homepage'>
		<Directory />
	</Container>
);

export default HomePage;
