import React, { ReactElement } from 'react';
import { IDropDownItem } from './types';

import { Button } from '../core';

const DropdownItem = ({ className, children, title }: IDropDownItem): ReactElement => {
  return (
    <li className="inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200">
      <Button type="button" layout="__dropdownItem" className={className} callback={() => {}} title={title}>
        {children}
      </Button>
    </li>
  );
};

export default DropdownItem;
