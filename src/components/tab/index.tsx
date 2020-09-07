import React, { ReactElement } from 'react';

import { useLocationDetails, goToRout, Routs, TRouts } from 'navigation';
import { TabButton } from 'components/core/button';
import { useLocale, TLocales } from 'locales';
import { ITabNav } from './types';

export const TabNav = ({ data }: ITabNav): ReactElement => {
  const { location } = useLocationDetails();
  const texts = useLocale();

  const callback = (item: TRouts) => {
    goToRout(item);
  };

  return (
    <div>
      {data.map((item) => {
        return (
          <TabButton
            title={texts[Routs[item].name as TLocales]}
            key={item}
            selected={location.pathname === Routs[item].link}
            callback={() => {
              callback(item);
            }}
          >
            {texts[Routs[item].name as TLocales]}
          </TabButton>
        );
      })}
    </div>
  );
};

export default TabNav;
