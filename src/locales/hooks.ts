import { useState, useEffect } from 'react';
import { ESupportedLanguages, TLocales } from './types';
import English from './english';

const initialValue = English;

const language = ESupportedLanguages.English;

export default function useLocale(): Record<TLocales, string> {
  const [locale, setLocale] = useState(initialValue);

  useEffect(() => {
    if (language === ESupportedLanguages.English) setLocale(English);
  }, []);

  return locale;
}
