import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
	const logged = true;

	return <BrowserRouter>{logged ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
};

export default Routes;
