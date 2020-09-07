import React from 'react';
import { Header, SideNav, Page, PageWrapper } from 'components';
import PageUI from './dashboard';

const Dashboard: React.FC<unknown> = () => {
  return (
    <Page>
      <SideNav />
      <PageWrapper>
        <Header />
        <PageUI />
      </PageWrapper>
    </Page>
  );
};

export default Dashboard;
