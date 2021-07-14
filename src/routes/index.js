import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

import PrivateRoute from '../components/PrivateRoute';
import Login from '../pages/Login';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Cadastro from '../pages/Cadastro';

const Routes = ({...props}) => {
	const {initialized} = useKeycloak();

	if (!initialized) {
		return <div>Carregando...</div>
	}

	return(
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login}/>
				<Layout>
					<PrivateRoute path="/" exact component={Home}/>
					<PrivateRoute path="/usuarios/:id/dashboard" component={Dashboard}/>
					<PrivateRoute path="/cadastro" component={Cadastro}/>
				</Layout>
			</Switch>
		</BrowserRouter>
	); 
};

export default Routes;
