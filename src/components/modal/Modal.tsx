import React, { useEffect, useState, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { Transition } from '@tailwindui/react';

import { CircleButton } from 'components/core/_button';
import Backdrop from '../backdrop';
import { IModal } from './types';

const Modal = ({ children, callback, isOpen }: IModal): ReactElement => {
  function handleEsc(e: KeyboardEvent) {
    if (e.key === 'Esc' || e.key === 'Escape') {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modalComponent = (
    <Transition show={isOpen}>
      <Backdrop callback={callback}>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-150"
          enterFrom="opacity-0 transform translate-y-1/2"
          enterTo="opacity-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0  transform translate-y-1/2"
        >
          <div
            tabIndex={0}
            onKeyPress={() => {}}
            role="button"
            className=" relative focus:outline-none w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex justify-end absolute right-0" style={{ right: '16px' }}>
              <CircleButton icon="i-cross" callback={callback} title="Close" />
            </header>
            {children}
          </div>
        </Transition>
      </Backdrop>
    </Transition>
  );

  return mounted ? createPortal(modalComponent, document.body) : <div />;
};

export default Modal;
