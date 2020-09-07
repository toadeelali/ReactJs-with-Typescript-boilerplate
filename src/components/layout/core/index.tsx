import React, { ReactElement, useContext, useEffect } from 'react';
import { SidebarContext } from 'services';
import { useLocation } from 'react-router-dom';
import { ICore } from './types';

const Page = ({ children, variant = 'withNav' }: ICore): ReactElement => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [closeSidebar, location]);

  return (
    <div className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen ? 'overflow-hidden' : ''}`}>
      {children}
    </div>
  );
};

export default Page;
