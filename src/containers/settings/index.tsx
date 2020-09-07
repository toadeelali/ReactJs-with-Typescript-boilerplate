import React from 'react';

import { Header, SideNav, Footer, Page, PageWrapper } from 'components/layout';

import PageUI from './settings';

const Settings: React.FC<unknown> = () => {
  return (
    <Page>
      <SideNav />
      <PageWrapper>
        <Header />
        <PageUI />
        <Footer />
      </PageWrapper>
    </Page>
  );
};

export default Settings;
