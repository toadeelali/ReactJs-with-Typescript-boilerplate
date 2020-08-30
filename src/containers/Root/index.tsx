import React from 'react';

import Button from 'components/core/Button/button';
import { useDispatch } from 'react-redux';

import { themeActions } from 'themes';
import { useStoreSelector } from 'services/state';
import ErrorBoundary from '../ErrorBoundary';

const MainStackNav = (): React.ReactElement => {
  const currentTheme = useStoreSelector((state) => state.theme.current);
  const dispatch = useDispatch();
  return (
    // if theme then provide here
    <ErrorBoundary>
      <div>
        Main page
        <br />
        <Button
          text={currentTheme}
          callback={() => {
            dispatch(themeActions.set(currentTheme === 'dark' ? 'light' : 'dark'));
          }}
        />
      </div>
    </ErrorBoundary>
  );
};

export default MainStackNav;
