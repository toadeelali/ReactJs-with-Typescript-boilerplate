import React, { ReactElement } from 'react';
import { Card, CardBody, RoundIcon } from 'components';
import { IDraftCard } from './types';

const DraftCard = ({
  cardTitle,
  cardSkill,
  cardAuthor,
  cardDate,
  cardSubject,
  cardGrade,
  cardIcon,
}: IDraftCard): ReactElement => {
  return (
    <Card className="mb-4">
      <CardBody className="py-2 px-4">
        <div className="flex flex-wrap w-full text-right mb-0 mt-2">
          <p className=" w-full text-right font-bold -mt-4 mb-0 text-gray-500 dark:text-gray-300 text-lg">...</p>
        </div>

        <div className="flex xs:flex-wrap gap-2 mt-0 ml-2 md:grid-cols-1 xl:grid-cols-1 xs:grid-cols-1">
          <div className="flex flex-shrink row-span-2 mt-2 flex-wrap xs:w-full">
            <RoundIcon
              icon={cardIcon || 'i-person'}
              color="text-orange-500 dark:text-orange-100"
              bgColor="bg-orange-100 dark:bg-orange-500"
              className="mr-2 w-12 h-12"
            />
          </div>

          <div className="flex-wrap grid gap-2 mt-0 ml-2 mb-0 md:grid-cols-1 xl:grid-cols-1">
            <div className="flex flex-wrap w-full grid-cols-1">
              <p className="font-bold mr-2 text-gray-600 dark:text-gray-300 text-xl tracking-tight">{cardTitle}</p>
              <p className="mt-2 mb-2 w-full text-gray-500 dark:text-gray-400 text-base font-semibold">
                <i className="i i-bookmark-check w-4" /> {cardSkill}
              </p>

              <div className="grid gap-0 mb-2 mt-3 ml-0 md:grid-cols-4 xl:grid-cols-4 w-full font-semibold text-sm text-gray-400">
                <p>
                  <i className="i i-calendar3 mr-1 text-gray-500" /> {cardDate}
                </p>
                <p>
                  <i className="i i-house mr-1 text-gray-500" /> {cardGrade}
                </p>
                <p>
                  <i className="i i-book mr-1 text-gray-500" /> {cardSubject}
                </p>
                <p>
                  <i className="i i-person mr-1 text-gray-500" /> {cardAuthor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default DraftCard;
