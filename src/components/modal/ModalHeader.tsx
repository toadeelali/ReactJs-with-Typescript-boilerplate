import React, { ReactElement } from 'react';
import { IModalGen } from './types';

const ModalHeader = ({ children, className }: IModalGen): ReactElement => {
  return <p className={`mt-4 mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300 ${className}`}>{children}</p>;
};

export default ModalHeader;
