import React from 'react';

import Container from 'react-bootstrap/Container';
import SignIn from '../../components/sign-in/sign-in.component';

import './sign-in-and-sign-up.component';

const SignInAndSignUp = () => (
	<Container>
		<div className='sign-in-and-sign-up'>
			<SignIn />
		</div>
	</Container>
);

export default SignInAndSignUp;
