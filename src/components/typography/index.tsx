import React, { ReactElement, ReactNode } from 'react';

interface IH1 {
  children: ReactNode;
}

export const PageTitle = ({ children }: IH1): ReactElement => {
  return <h1 className="my-6 text-2xl font-bold text-gray-700 dark:text-gray-200">{children}</h1>;
};

export const SectionTitle = ({ children }: IH1): ReactElement => {
  return <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">{children}</h2>;
};

export const Body = ({ children }: IH1): ReactElement => {
  return <p className="font-normal text-base mx-3 pb-6">{children}</p>;
};
