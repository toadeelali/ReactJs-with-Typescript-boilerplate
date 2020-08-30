import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from 'helpers/history';
import { RoutsEnum } from 'navigation';

import Home from 'containers/home';
import Matching from 'containers/matching';
import Sorting from 'containers/sorting';

const Routes = (): React.ReactElement => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={RoutsEnum.SORTING} component={Sorting} />
        <Route path={RoutsEnum.MATCHING} component={Matching} />
        <Route path={RoutsEnum.HOME} component={Home} />
        <Route render={() => <Redirect to={RoutsEnum.HOME} />} />
      </Switch>
    </Router>
  );
};

export default Routes;
