import React from 'react';

import { Container } from './styles';
import Header from '../Header';
import Content from '../Content';

const Layout = () => {
	return (
		<Container>
			<Header />
			<Content />
		</Container>
	);
};

export default Layout;
