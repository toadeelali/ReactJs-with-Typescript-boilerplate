import React, { ReactNode, ReactElement } from 'react';

interface IPaper {
  children: ReactNode;
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

const SearchBar = ({ children, className = '' }: IPaper): ReactElement => {
  return <div className={`rounded-lg shadow-sm w-full justify-center bg-white p-4 ${className}`}>{children}</div>;
};

export default SearchBar;
