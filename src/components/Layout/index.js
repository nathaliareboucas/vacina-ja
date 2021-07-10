import React from 'react';

import { Container } from './styles';
import Header from '../Header';
import Content from '../Content';

const Layout = ({ children }) => {
	return (
		<Container>
			<Header />
			<Content>{children}</Content>
		</Container>
	);
};

export default Layout;
