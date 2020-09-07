import React from 'react';

import { Body } from 'components';
import { useLocale } from 'locales';

const Approved: React.FC<unknown> = () => {
  const texts = useLocale();
  return (
    <div className="grid grid-cols-1 mb-8">
      <Body>{texts.APPROVED}</Body>
    </div>
  );
};

export default Approved;
