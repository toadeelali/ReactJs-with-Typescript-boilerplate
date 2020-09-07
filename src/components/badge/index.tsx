import React, { ReactElement } from 'react';
import { IBadge } from './types';

const badge = {
  success: 'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100',
  danger: 'text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700',
  warning: 'text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600',
  neutral: 'text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700',
  primary: 'text-blue-700 bg-blue-100 dark:text-white dark:bg-blue-600',
};

const Badge = ({ className, children, type = 'primary' }: IBadge): ReactElement => {
  return (
    <span className={`inline-flex px-2 text-xs font-medium leading-5 rounded-full ${badge[type]}`}>{children}</span>
  );
};

export default Badge;
