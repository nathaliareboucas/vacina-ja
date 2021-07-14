import React from 'react';
import { Link } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

import './style.css';
import logo from '../../assets/logo.png';
import imgLogout from '../../assets/exit.png';

import { Container, Logo, Nav, Logout } from './styles';

const Header = () => {
	const { keycloak } = useKeycloak();
	let uid = null;

	if (keycloak !== null && keycloak !== undefined && keycloak.tokenParsed) {
		uid = keycloak.tokenParsed.sub;
	}

	const logout = () => {
		keycloak.logout();
	};
	return (
		<Container>
			<Logo src={logo} alt="Logo Vacina Já" />
			<Nav>
				<Link className="link" to="/cadastro">
					Cadastro
				</Link>
				<Link className="link" to={`/usuarios/${uid}/dashboard`}>
					Vacinômetro
				</Link>
			</Nav>

			<Logout type="button" onClick={logout}>
				<img src={imgLogout} alt="Sair" />
			</Logout>
		</Container>
	);
};

export default Header;
