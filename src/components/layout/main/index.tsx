import React, { ReactNode, ReactElement } from 'react';

interface IMain {
  children: ReactNode;
}

const Main = ({ children }: IMain): ReactElement => {
  return <div className="p-8 m pt-24 px-64">{children}</div>;
};

export default Main;
