import React, { ReactElement } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// import Home from 'containers/home';
import Content from 'containers/content';
import Dashboard from 'containers/dashboard';
import Messages from 'containers/messages';
import Settings from 'containers/settings';
import Skills from 'containers/skills';
import Create from 'containers/createContent';

import { history } from './history';
import { Routs } from './types';

const RouteController = (): ReactElement => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={Routs.CREATE.link} component={Create} />
        <Route path={Routs.DASHBOARD.link} component={Dashboard} />

        <Route path={Routs.MESSAGES.link} component={Messages} />
        <Route path={Routs.SKILLS.link} component={Skills} />
        <Route path={Routs.CONTENT.link} component={Content} />
        <Route path={Routs.SETTINGS.link} component={Settings} />
        <Route render={() => <Redirect to={Routs.DASHBOARD.link} />} />
      </Switch>
    </Router>
  );
};

export default RouteController;
