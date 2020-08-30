import React from 'react';

import { Header, SideNav, Main, Footer, Core } from 'components/layout';

const Sorting: React.FC<unknown> = () => {
  return (
    <Core>
      <Header />
      <SideNav />
      <Main>Sorting</Main>
      <Footer />
    </Core>
  );
};

export default Sorting;
