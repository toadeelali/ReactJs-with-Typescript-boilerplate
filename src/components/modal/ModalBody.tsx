import React, { ReactElement } from 'react';
import { IModalGen } from './types';

const ModalBody = ({ children, className }: IModalGen): ReactElement => {
  return <div className={`mb-6 text-sm text-gray-700 dark:text-gray-400 ${className}`}>{children}</div>;
};

export default ModalBody;
