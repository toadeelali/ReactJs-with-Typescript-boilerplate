import React from 'react';

import { Header, SideNav, Main, Footer, Core } from 'components/layout';

const Matching: React.FC<unknown> = () => {
  return (
    <Core>
      <Header />
      <SideNav />
      <Main>Matching</Main>
      <Footer />
    </Core>
  );
};

export default Matching;
