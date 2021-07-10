import React from 'react';
import { Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';

const AppRoutes = () => (
	<Layout>
		<Route path="/home" component={Home} />
	</Layout>
);

export default AppRoutes;
