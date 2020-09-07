import React, { useEffect, useRef, ReactElement } from 'react';
import { Transition } from '@tailwindui/react';
import { IDropDown } from './types';

const Dropdown = ({ children, onClose, isOpen, className, align = 'right' }: IDropDown): ReactElement => {
  const dropdownRef = useRef<HTMLUListElement>(null);
  const alignTo = align === 'left' ? 'left-0' : 'right-0';

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (dropdownRef && dropdownRef.current && !(dropdownRef.current! as any).contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <ul
        className={`${alignTo} absolute w-56 p-2 mt-2 text-gray-600 bg-white border border-gray-100 rounded-lg shadow-md min-w-max-content dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700 ${className}`}
        ref={dropdownRef}
        aria-label="submenu"
      >
        {children}
      </ul>
      {/* </div> */}
    </Transition>
  );
};

export default Dropdown;
