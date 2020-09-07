import React, { ReactElement } from 'react';

import SidebarDesktop from './desktopView';
import MobileSidebar from './mobileView';

const SideNav = (): ReactElement => {
  return (
    <>
      <SidebarDesktop />
      <MobileSidebar />
    </>
  );
};

export default SideNav;
