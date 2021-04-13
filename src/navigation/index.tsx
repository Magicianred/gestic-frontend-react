import React from 'react';
import { Redirect, Route, Switch, BrowserRouter as Router, useHistory } from 'react-router-dom';
import { useTemplate } from '../providers/TemplateProvider';
import { routes } from './routes';

export const Navigation = () => {
  const context = useTemplate();

  return (
    <Router>
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
    </Router>
  );
};

function PrivateRoute({ component: Component, context, ...rest }) {
  const history = useHistory();
  const { user } = context;
  return (
    <Route
      {...rest}
      render={props => (user ? <Component {...props} context={context} history={history} /> : <Redirect to="/login" />)}
    />
  );
}

function PublicRoute({ component: Component, context, ...rest }) {
  const history = useHistory();

  return <Route {...rest} render={props => <Component {...props} context={context} history={history} />} />;
}
