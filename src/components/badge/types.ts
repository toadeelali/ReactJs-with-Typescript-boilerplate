import { ReactNode } from 'react';

export type TBadge = 'success' | 'danger' | 'warning' | 'neutral' | 'primary';
export interface IBadge {
  className?: string;
  children: ReactNode;
  type?: TBadge;
}
