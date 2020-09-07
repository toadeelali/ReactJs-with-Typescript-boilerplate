import React, { ReactElement, ReactNode } from 'react';

interface IBackDrop {
  // eslint-disable-next-line react/require-default-props
  className?: string;
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
  callback: () => void;
  // eslint-disable-next-line react/require-default-props
  visible?: boolean;
}

const BackDrop = ({ className = '', children, callback, visible = true }: IBackDrop): ReactElement => {
  const onKeyPressHandler = () => {};
  return (
    <div
      tabIndex={0}
      onKeyPress={onKeyPressHandler}
      role="button"
      onClick={callback}
      className={`${
        visible ? 'block' : 'hidden'
      } fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center ${className}`}
    >
      {children}
    </div>
  );
};

export default BackDrop;
