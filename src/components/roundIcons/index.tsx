import React, { ReactElement } from 'react';
import { IRoundIcon } from './types';

function RoundIcon({
  icon,
  color = 'text-blue-600 dark:text-blue-100',
  bgColor = 'bg-blue-100 dark:bg-blue-600',
  className,
}: IRoundIcon): ReactElement {
  return (
    <div className={`p-3 rounded-full ${color} ${bgColor} ${className}`}>
      <div className="w-6 h-6 text-center">
        <i className={`${icon} text-2xl leading-6`} />
      </div>
    </div>
  );
}

export default RoundIcon;
