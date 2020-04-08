import React from 'react';

import { Row, Col } from 'react-bootstrap';

import MenuItem from '../../components/menu-item/menu-item.components';

import './directory.styles.scss';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: 'hats',
					imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 1,
					linkUrl: 'shop/hats'
				},
				{
					title: 'jackets',
					imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
					id: 2,
					linkUrl: 'shop/jackets'
				},
				{
					title: 'sneakers',
					imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
					id: 3,
					linkUrl: 'shop/sneakers'
				},
				{
					title: 'womens',
					imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
					size: 'large',
					id: 4,
					linkUrl: 'shop/womens'
				},
				{
					title: 'mens',
					imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
					size: 'large',
					id: 5,
					linkUrl: 'shop/mens'
				}
			]
		};
	}

	render() {
		return (
			<Row>
				<Col sm>
					<div className='directory-menu'>
						{this.state.sections.map(({ title, imageUrl, size, id }) => (
							<MenuItem
								key={id}
								title={title}
								imageUrl={imageUrl}
								size={size}
							/>
						))}
					</div>
				</Col>
			</Row>
		);
	}
}

export default Directory;
