import React from 'react';
import { Main, PageTitle, TabNav, Card, CardBody } from 'components';
import { Router, Switch, Redirect, Route } from 'react-router-dom';

import { useLocale } from 'locales';
import Button from 'components/core/button';

import { Routs, history, TRouts, goToRout } from 'navigation';

import Draft from 'containers/draft';
import InReview from 'containers/inReview';
import Approved from 'containers/approved';

const TabsData: TRouts[] = ['DRAFT', 'IN_REVIEW', 'APPROVED'];

const PageUI = (): React.ReactElement => {
  const texts = useLocale();
  return (
    <Main>
      <PageTitle>{texts.DASHBOARD}</PageTitle>

      <Card className="mb-8 shadow-md">
        <CardBody className="flex justify-between" padding="px-3">
          <div>
            <TabNav data={TabsData} />
          </div>
          <div className="py-3">
            <Button
              title="Create new content"
              callback={() => {
                goToRout('CREATE');
              }}
            >
              Add New Content
            </Button>
          </div>
        </CardBody>
      </Card>

      <Router history={history}>
        <Switch>
          <Route path={Routs.DRAFT.link} component={Draft} />
          <Route path={Routs.IN_REVIEW.link} component={InReview} />
          <Route path={Routs.APPROVED.link} component={Approved} />
          <Route render={() => <Redirect to={Routs.DRAFT.link} />} />
        </Switch>
      </Router>
    </Main>
  );
};

export default PageUI;
