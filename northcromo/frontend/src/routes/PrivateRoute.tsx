// src/routes/PrivateRoute.tsx
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
  // Adicione mais propriedades conforme necessário
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated, ...rest }) => {
  return isAuthenticated ? <Route {...rest} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
