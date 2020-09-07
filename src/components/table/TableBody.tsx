import React, { ReactElement } from 'react';
import { ITableGen } from './types';

const TableBody = ({ className, children }: ITableGen): ReactElement => {
  return (
    <tbody
      className={`bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400 ${className}`}
    >
      {children}
    </tbody>
  );
};

export default TableBody;
