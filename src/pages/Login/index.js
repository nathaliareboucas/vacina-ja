import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

const Login = ({...props}) => {

	const {keycloak} = useKeycloak();
	const location = useLocation();

	const {from} = location.state || {from: {pathname: '/'}};

	if (keycloak?.authenticated) {
		return <Redirect to={from} />
	} else {
		keycloak?.login();
		return <div>Carregando...</div>
	}
};

export default Login;
