import React, { ReactElement } from 'react';
import { IButton, TButtonSizeSupport, ITabButton, ICircleButton } from './types';

const baseStyle = `align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none`;

const sizeStyles = {
  larger: 'px-10 py-4 rounded-lg',
  large: 'px-5 py-3 rounded-lg',
  regular: 'px-4 py-2 rounded-lg text-sm',
  small: 'px-3 py-1 rounded-md text-sm',
  /**
   * Only used in Pagination.
   * Not meant for general use.
   */
  pagination: 'px-3 py-1 rounded-md text-xs',
};

const iconSizeStyles = {
  larger: 'p-4 rounded-lg',
  large: 'p-3 rounded-lg',
  regular: 'p-2 rounded-lg',
  small: 'p-2 rounded-md',
};

const iconSize = {
  larger: 'h-5 w-5',
  large: 'h-5 w-5',
  regular: 'h-5 w-5',
  small: 'h-3 w-3',

  left: 'mr-2 -ml-1',
  right: 'ml-2 -mr-1',
};

const layoutStyles = {
  primary: 'text-white bg-blue-600 border border-transparent',
  outline: 'text-gray-600 border-blue-300 border dark:text-gray-400 focus:outline-none',
  link: 'text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent',
};

const activeStyles = {
  primary: 'active:bg-blue-600 hover:bg-blue-700 focus:shadow-outline-blue',
  outline:
    'text-blue-600 active:bg-transparent hover:border-blue-600 focus:border-blue-600 active:text-blue-600 focus:shadow-outline-gray',
  link:
    'active:bg-transparent hover:bg-gray-200 focus:shadow-outline-gray dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10',
};

const disabledStyles = {
  primary: 'opacity-50 cursor-not-allowed',
  outline: 'opacity-50 cursor-not-allowed bg-gray-300',
  link: 'opacity-50 cursor-not-allowed',
};

/**
 * Only used in DropdownItem.
 * Not meant for general use.
 */
const dropdownItemStyle =
  'focus:outline-none inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200';

const Button = ({
  icon,
  iconLeft,
  iconRight,
  disabled = false,
  size = 'regular',
  layout = 'primary',
  block = false,
  className = '',
  type = 'button',
  children,
  callback,
  title,
}: IButton): ReactElement => {
  const hasIcon = () => {
    return !!icon || !!iconLeft || !!iconRight;
  };

  const iconStyle = iconSize[size as TButtonSizeSupport];

  let cls = className;
  if (layout === '__dropdownItem') {
    cls += ` ${dropdownItemStyle}`;
  } else {
    cls += ` ${baseStyle}`;
    if (hasIcon() && !children) cls += ` ${iconSizeStyles[size as TButtonSizeSupport]}`;

    if (hasIcon() && children) cls += ` ${sizeStyles[size]}`;
    if (!hasIcon()) cls += ` ${sizeStyles[size]}`;

    cls += ` ${layoutStyles[layout]}`;
    if (block) cls += ` w-full`;
    cls += ` ${disabled ? disabledStyles[layout] : activeStyles[layout]}`;
  }

  const iconLeftStyles = `${iconStyle} ${typeof children !== 'undefined' ? iconSize.left : ''}`;
  const iconRightStyles = `${iconStyle} ${typeof children !== 'undefined' ? iconSize.right : ''}`;

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={cls} disabled={disabled} onClick={callback} title={title}>
      {(icon || iconLeft) && <i className={`${iconLeftStyles} i ${icon || iconLeft}`} aria-hidden="true" />}
      {children}
      {iconRight && <i className={`${iconRightStyles} i ${iconRight}`} aria-hidden="true" />}
    </button>
  );
};

export default Button;

export const TabButton = ({ children, callback, className, selected = false, title }: ITabButton): ReactElement => {
  return (
    <div
      className={`px-3 pt-3 pb-2 inline-block ${className} border-b-4 ${
        selected ? 'border-blue-500' : 'border-transparent'
      }`}
    >
      <Button layout="link" type="button" callback={callback} title={title}>
        {children}
      </Button>
    </div>
  );
};

export const CircleButton = ({
  title,
  callback,
  icon,
  className = '',
  color = 'bg-gray-200 hover:bg-gray-300 text-gray-800',
}: ICircleButton): ReactElement => {
  return (
    <button
      title={title}
      onClick={callback}
      type="button"
      className={`focus:outline-none btn w-10 h-10 rounded-full ml-2 text-sm transition-colors duration-150 ease-in-out ${color} ${className}`}
    >
      <i className={`${icon}`} />
    </button>
  );
};
