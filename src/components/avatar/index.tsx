import React, { ReactElement } from 'react';
import { IAvatar } from './types';

const Avatar = ({ size = 'regular', src, alt, className }: IAvatar): ReactElement => {
  let sizeClass = 'w-8 h-8';
  if (size === 'large') sizeClass = 'w-10 h-10';
  else if (size === 'small') sizeClass = 'w-6 h-6';

  return (
    <div className={`relative rounded-full inline-block ${className} ${sizeClass}`}>
      <img className="object-cover w-full h-full rounded-full" src={src} alt={alt} loading="lazy" />
      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
    </div>
  );
};

export default Avatar;
