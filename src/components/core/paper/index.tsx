/* eslint-disable react/require-default-props */
import React, { ReactNode, ReactElement } from 'react';

interface IPaper {
  children: ReactNode;
  className?: string;
  width?: string;
  padding?: string;
  display?: string;
  shadow?: string;
  borderRadius?: string;
}

const Paper = ({
  children,
  className = '',
  width = 'w-full',
  padding = 'p-4',
  display = 'flex',
  shadow = 'shadow-xs',
  borderRadius = 'rounded-lg',
}: IPaper): ReactElement => {
  return (
    <div className={`bg-white dark:bg-gray-800 ${borderRadius} ${display} ${shadow} ${width} ${padding} ${className}`}>
      {children}
    </div>
  );
};

export default Paper;
