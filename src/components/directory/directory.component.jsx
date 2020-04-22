import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Row, Col } from 'react-bootstrap';

import MenuItem from '../menu-item/menu-item.component';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import './directory.styles.scss';

const Directory = ({ sections }) => (
	<Row>
		<Col sm>
			<div className='directory-menu'>
				{sections.map(({ id, ...otherSectionsProps }) => (
					<MenuItem key={id} {...otherSectionsProps} />
				))}
			</div>
		</Col>
	</Row>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
