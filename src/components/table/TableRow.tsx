import React, { ReactElement } from 'react';
import { ITableGen } from './types';

const TableRow = ({ className, children }: ITableGen): ReactElement => {
  return <tr className={className}>{children}</tr>;
};

export default TableRow;
