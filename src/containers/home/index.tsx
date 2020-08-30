import React from 'react';
import { Header, SideNav, Main, Footer, Core } from 'components/layout';

const Home: React.FC<unknown> = () => {
  return (
    <Core>
      <Header />
      <SideNav />
      <Main>Home</Main>
      <Footer />
    </Core>
  );
};
export default Home;
