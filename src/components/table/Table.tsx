import React, { ReactElement } from 'react';
import { ITableGen } from './types';

const Table = ({ children, className }: ITableGen): ReactElement => {
  return (
    <div className="w-full overflow-x-auto">
      <table className={`w-full whitespace-no-wrap ${className}`}>{children}</table>
    </div>
  );
};

export default Table;
