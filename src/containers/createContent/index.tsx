import React from 'react';
import { Header, SideNav, Page, PageWrapper } from 'components';

import PageUI from './createContent';

const Create: React.FC<unknown> = () => {
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

export default Create;
