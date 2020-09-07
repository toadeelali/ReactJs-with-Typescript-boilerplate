import { ReactNode } from 'react';

export type TVariant = 'full' | 'withNav';

export interface ICore {
  children: ReactNode;
  variant?: TVariant;
}
