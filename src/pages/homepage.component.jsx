import React from 'react';

import Directory from '../components/directory/directory.component';

import Container from 'react-bootstrap/Container';

import './homepage.component';

const HomePage = () => (
	<Container className='homepage'>
		<Directory />
	</Container>
);

export default HomePage;
