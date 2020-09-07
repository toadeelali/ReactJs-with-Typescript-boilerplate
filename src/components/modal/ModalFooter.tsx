import React, { ReactElement } from 'react';
import { IModalGen } from './types';

const ModalFooter = ({ children, className }: IModalGen): ReactElement => {
  return (
    <footer
      className={`flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800 ${className}`}
    >
      {children}
    </footer>
  );
};

export default ModalFooter;
