import React, { ReactElement, useState, useContext } from 'react';
import Dropdown from 'components/dropdown/Dropdown';
import DropdownItem from 'components/dropdown/DropdownItem';
import { useLocale } from 'locales';
import { SidebarContext } from 'services';
import { CircleButton } from 'components/core/_button';

export const LeftContainer = (): ReactElement => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <button
      type="button"
      className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-blue"
      onClick={toggleSidebar}
      aria-label="Menu"
    >
      <i className="i-arrow-down" />
    </button>
  );
};

export const MiddleContainer = (): ReactElement => {
  const texts = useLocale();
  return (
    <div className="flex justify-center flex-1 lg:mr-32">
      <div className="relative w-full max-w-xl mr-6 focus-within:text-gray-500">
        <div className="absolute inset-y-0 flex items-center pl-4">
          <i className="i-search" />
        </div>
        <input
          type={texts.SEARCH}
          placeholder={texts.SEARCH}
          className="pl-10 text-gray-700 transition-colors duration-100 ease-in-out py-2 pr-4 block w-full appearance-none leading-normal border border-transparent rounded-lg focus:outline-none text-left select-none truncate focus:bg-white focus:border-gray-300 bg-gray-200"
        />
      </div>
    </div>
  );
};

export const RightContainer = (): ReactElement => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  return (
    <ul className="flex items-center flex-shrink-0 space-x-6">
      {/* <!-- Theme toggler --> */}
      <li className="flex">{/* <Dropdown /> */}</li>
      {/* <!-- Notifications menu --> */}
      <li className="relative">{/* <Dropdown /> */}</li>
      {/* <!-- Profile menu --> */}
      <li className="relative">
        <CircleButton
          title="User name"
          className={`${!isProfileMenuOpen ? 'pt-1' : ''}`}
          icon={isProfileMenuOpen ? 'i-caret-up-fill' : 'i-caret-down-fill'}
          callback={() => {
            setIsProfileMenuOpen(true);
          }}
        />
        <Dropdown align="right" isOpen={isProfileMenuOpen} onClose={async () => setIsProfileMenuOpen(false)}>
          <DropdownItem title="Profile">Profile</DropdownItem>
          <DropdownItem title="Settings">Settings</DropdownItem>
          <DropdownItem title="Log out">Log out</DropdownItem>
        </Dropdown>
      </li>
    </ul>
  );
};
