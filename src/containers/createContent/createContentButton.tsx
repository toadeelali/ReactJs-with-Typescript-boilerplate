import React, { ReactElement } from 'react';
import { Card, CardBody, RoundIcon } from 'components';
import { ICreateContentCard } from './types';

const CreateContentButton = ({ title, url, icon, color = 'blue' }: ICreateContentCard): ReactElement => {
  const fg = `text-${color}-500 dark:text-${color}-100`;
  const bg = `bg-${color}-100 dark:bg-${color}-500`;
  return (
    <a href={url}>
      <Card>
        <CardBody className="flex items-center">
          <RoundIcon icon={icon || 'i-person'} color={fg} bgColor={bg} className="mt-1 mr-4" />
          <p className="text-md mt-1 font-medium text-gray-600 dark:text-gray-400">{title}</p>
        </CardBody>
      </Card>
    </a>
  );
};

export default CreateContentButton;
