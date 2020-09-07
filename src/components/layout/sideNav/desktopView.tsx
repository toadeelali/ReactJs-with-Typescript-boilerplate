import React from 'react';
import { SidebarContent } from './localComponents';

const SidebarDesktop = (): React.ReactElement => {
  return (
    <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block">
      <SidebarContent />
    </aside>
  );
};

export default SidebarDesktop;
