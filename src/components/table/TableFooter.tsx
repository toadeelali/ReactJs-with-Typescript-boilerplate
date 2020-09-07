import React, { ReactElement } from 'react';
import { ITableGen } from './types';

const TableFooter = ({ className, children }: ITableGen): ReactElement => {
  return (
    <div
      className={`px-4 py-3 border-t dark:border-gray-700 bg-gray-50 text-gray-500 dark:text-gray-400 dark:bg-gray-800 ${className}`}
    >
      {children}
    </div>
  );
};

export default TableFooter;
