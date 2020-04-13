import React from 'react';

import { Container, Row } from 'react-bootstrap';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.component';

const SignInAndSignUp = () => (
	<Container>
		<Row>
			<SignIn />
			<SignUp />
		</Row>
	</Container>
);

export default SignInAndSignUp;
