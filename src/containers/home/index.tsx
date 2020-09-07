import React from 'react';
import { Header, SideNav, Main, Footer, Page } from 'components/layout';

const Home: React.FC<unknown> = () => {
  return (
    <>
      <Header />
      <Page>
        <SideNav />
        {/* TODO: Language review */}
        <Main>Home</Main>
        <Footer />
      </Page>
    </>
  );
};
export default Home;
