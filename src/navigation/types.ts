import { TLocales } from 'locales';

export type TRouts =
  | 'MAIN'
  | 'HOME'
  | 'DASHBOARD'
  | 'MESSAGES'
  | 'SKILLS'
  | 'CONTENT'
  | 'SETTINGS'
  | 'DRAFT'
  | 'IN_REVIEW'
  | 'APPROVED'
  | 'CREATE';

export interface IRouts {
  name?: TLocales;
  link: string;
  directory?: TRouts;
  backLink?: TRouts;
  param?: string;
  icon?: string;
  isDirectory?: boolean;
}

export const Routs: Record<TRouts, IRouts> = {
  HOME: {
    link: '',
  },
  MAIN: {
    link: '/',
  },
  DASHBOARD: {
    name: 'DASHBOARD',
    link: '/dashboard',
    icon: 'i-house',
    isDirectory: true,
  },
  MESSAGES: {
    name: 'MESSAGES',
    link: '/messages',
    icon: 'i-chat-text',
    isDirectory: true,
  },
  SKILLS: {
    name: 'SKILLS',
    link: '/skills',
    icon: 'i-brush',
    isDirectory: true,
  },
  CONTENT: {
    name: 'CONTENT',
    link: '/content',
    icon: 'i-grid-1x2',
    isDirectory: true,
  },
  SETTINGS: {
    name: 'SETTINGS',
    link: '/settings',
    icon: 'i-gear',
    isDirectory: true,
  },

  CREATE: {
    name: 'CREATE',
    link: '/dashboard/create',
    backLink: 'DASHBOARD',
  },
  DRAFT: {
    name: 'DRAFT',
    link: '/dashboard/draft',
    backLink: 'DASHBOARD',
  },
  IN_REVIEW: {
    name: 'IN_REVIEW',
    link: '/dashboard/in-review',
    backLink: 'DASHBOARD',
  },
  APPROVED: {
    name: 'APPROVED',
    link: '/dashboard/approved',
    backLink: 'DASHBOARD',
  },
};
