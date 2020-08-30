import React, { ReactNode } from 'react';

interface ICore {
  children: ReactNode;
}

const Core = ({ children }: ICore): React.ReactElement => {
  return <div className="pl-64 pt-24">{children}</div>;
};

export default Core;
