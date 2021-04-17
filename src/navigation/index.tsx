import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { routes } from './routes';
import { useAuth } from '../providers/AuthProvider';

function PrivateRoute({ component: Component, context, ...rest }) {
  const history = useHistory();
  const { user } = context;

  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} render={props => <Component {...props} context={context} history={history} />} />;
}

function PublicRoute({ component: Component, context, ...rest }) {
  const history = useHistory();
  const { user } = context;

  if (user) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} render={props => <Component {...props} context={context} history={history} />} />;
}

export const Navigation = () => {
  const context = useAuth();

  return (
    <Switch>
      {routes.map(route =>
        route.private ? (
          <PrivateRoute key={route.path} path={route.path} exact component={route.component} context={context} />
        ) : (
          <PublicRoute key={route.path} path={route.path} exact component={route.component} context={context} />
        ),
      )}
      <Redirect to="/" exact />
    </Switch>
  );
};
