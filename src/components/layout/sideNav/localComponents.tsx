import React, { SyntheticEvent, ReactElement } from 'react';

import { TRouts, Routs, useLocationDetails, goToURL } from 'navigation';
import { useLocale, TLocales } from 'locales';
import { ISideLink } from './types';

export const SidebarContent = (): React.ReactElement => {
  const { data } = useLocationDetails();
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="/">
        CMS Pro
      </a>
      <ul className="mt-6">
        {(Object.keys(Routs) as Array<TRouts>).map((route) => {
          if (!Routs[route].isDirectory) return null;
          return (
            <SideLink
              item={Routs[route]}
              key={Routs[route].name}
              current={data.link === Routs[route].link || data.backLink === route}
            />
          );
        })}
      </ul>
    </div>
  );
};

export const SideLink = ({ item, current }: ISideLink): ReactElement => {
  const texts = useLocale();
  const callback = (e: SyntheticEvent) => {
    e.preventDefault();
    const link = e.currentTarget.getAttribute('href') as TRouts;
    goToURL(link);
  };

  return (
    <li className="relative px-6 py-3">
      <a
        title={texts[item.name as TLocales]}
        type="button"
        href={item.link}
        className={`${
          current && 'text-blue-600'
        } inline-flex items-center w-full font-semibold text-base transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200`}
        onClick={callback}
      >
        <i className={`text-xl i ${item.icon}`} />
        <span className="ml-4">{texts[item.name as TLocales]}</span>
      </a>
    </li>
  );
};
