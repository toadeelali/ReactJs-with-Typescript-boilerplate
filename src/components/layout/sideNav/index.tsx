import React from 'react';
import Button from 'components/core/Button';
import { pageSwitch } from 'helpers/history';

const SideNav = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center bg-teal-100 p-6 h h-screen fixed w-1/4 inset-0 right-auto">
      <Button
        text="Home"
        callback={() => {
          pageSwitch('');
        }}
      />
      <Button
        text="Matching"
        callback={() => {
          pageSwitch('matching');
        }}
      />
      <Button
        text="Sorting"
        callback={() => {
          pageSwitch('sorting');
        }}
      />
    </div>
  );
};

export default SideNav;
