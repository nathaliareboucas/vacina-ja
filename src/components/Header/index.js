import React from 'react';

import logo from '../../assets/logo.png';
import imgLogout from '../../assets/exit.png';

import { Container, Logo, Logout } from './styles';

const Header = () => {
	return (
		<Container>
			<Logo src={logo} alt="Logo Vacina Já" />
			<Logout>
				<img src={imgLogout} alt="Sair" />
			</Logout>
		</Container>
	);
};

export default Header;
