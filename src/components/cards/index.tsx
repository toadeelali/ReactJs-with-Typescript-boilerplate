import React, { ReactElement } from 'react';
import { ICardInfo, ICardBody, ICard } from './types';

export const CardBody = ({ className, children, padding = 'p-4' }: ICardBody): ReactElement => {
  return <div className={`${padding} ${className}`}>{children}</div>;
};

export const Card = ({ className, colored, children }: ICard): ReactElement => {
  const def = colored || 'bg-white dark:bg-gray-800';
  return <div className={`min-w-0 rounded-lg shadow-xs overflow-hidden ${className} ${def}`}>{children}</div>;
};

export const InfoCard = ({ title, value, children: icon }: ICardInfo): ReactElement => {
  return (
    <Card>
      <CardBody className="flex items-center">
        {icon}
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{value}</p>
        </div>
      </CardBody>
    </Card>
  );
};
