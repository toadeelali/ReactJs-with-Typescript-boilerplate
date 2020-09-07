import React from 'react';
import { Main, PageTitle, SectionTitle } from 'components';
import { useLocale } from 'locales';

import CreateContentButton from './createContentButton';
import { BasicCardsData } from './types';

const PageUI = (): React.ReactElement => {
  const texts = useLocale();
  return (
    <Main>
      <PageTitle>{texts.CREATE}</PageTitle>

      <SectionTitle>Basic</SectionTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {BasicCardsData.map((item) => (
          <CreateContentButton title={item.title} url={item.url} icon={item.icon} color={item.color} />
        ))}
      </div>

      <SectionTitle>Games</SectionTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <CreateContentButton title="Crossword" url="google.com" icon="i-bookmark-check" color="green" />
        <CreateContentButton title="Rumble in the Jumble" url="google.com" icon="i-bookmark-check" color="indigo" />
        <CreateContentButton title="Timor the Turtle" url="google.com" icon="i-bookmark-check" color="pink" />
      </div>

      <SectionTitle>AI-Powered Generators</SectionTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <CreateContentButton title="Vocabulary MCQs" url="google.com" icon="i-bookmark-check" color="indigo" />
        <CreateContentButton title="Vocabulary Crossword" url="google.com" icon="i-bookmark-check" color="orange" />
      </div>
    </Main>
  );
};

export default PageUI;
