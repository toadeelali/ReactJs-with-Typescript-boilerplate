import React, { ReactElement } from 'react';
import { ITableGen } from './types';

const TableContainer = ({ className, children }: ITableGen): ReactElement => {
  return <div className={`w-full overflow-hidden rounded-lg shadow-xs ${className}`}>{children}</div>;
};

export default TableContainer;
