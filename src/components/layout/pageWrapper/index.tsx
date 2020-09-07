import React, { ReactNode } from 'react';

const PageWrapper = ({ children }: { children: ReactNode }): React.ReactElement => {
  return <div className="flex flex-col flex-1 w-full">{children} </div>;
};

export default PageWrapper;
