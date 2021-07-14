import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {keycloak} from '../../utils/auth';

export const PrivateRoute = (props) => {
  const {component, ...other} = props;
  const Component = component;

  return(    
    <Route 
      {...other} 
      render={(props) => {
        return keycloak.authenticated ? (
          <Component {...props} />
        ): (
          <Redirect 
            to={{
              pathname: '/login',
              state: {from: props.location}
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;