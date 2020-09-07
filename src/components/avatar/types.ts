export type TAvatarSize = 'large' | 'regular' | 'small';

export interface IAvatar {
  size?: TAvatarSize;
  src: string;
  alt: string;
  className?: string;
}
