import React from 'react';

// import { Paper } from 'components/core';
import { LeftContainer, MiddleContainer, RightContainer } from './localComponents';

const Header = (): React.ReactElement => {
  return (
    <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-gray-600 dark:text-blue-300">
        <LeftContainer />
        <MiddleContainer />
        <RightContainer />
      </div>
    </header>
  );
};

export default Header;
