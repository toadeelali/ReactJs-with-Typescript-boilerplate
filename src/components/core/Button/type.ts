import { SyntheticEvent } from 'react';

export interface IButton {
  text: string;
  callback: (event: SyntheticEvent) => void;
}
