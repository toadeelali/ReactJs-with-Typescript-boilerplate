import React from 'react';

import { Body } from 'components';
import { useLocale } from 'locales';

const InReview: React.FC<unknown> = () => {
  const texts = useLocale();
  return (
    <div className="grid grid-cols-1 mb-8">
      <Body>{texts.IN_REVIEW}</Body>
    </div>
  );
};

export default InReview;
