import React, { ReactElement } from 'react';
import { ITableGen } from './types';

const TableCell = ({ className, children }: ITableGen): ReactElement => {
  return <td className={`px-4 py-3 ${className}`}>{children}</td>;
};

export default TableCell;
