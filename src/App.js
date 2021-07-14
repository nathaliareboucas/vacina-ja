import React from 'react';
import Routes from './routes';

import './utils/auth';
import { KeycloakProvider } from '@react-keycloak/web';
import {keycloak, keycloakProviderInitConfig} from './utils/auth';

const App = () => {
  return(
    <KeycloakProvider keycloak={keycloak} initConfig={keycloakProviderInitConfig}>
      <Routes />	
    </KeycloakProvider>
  );
}



export default App;
