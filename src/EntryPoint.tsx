import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'services/state';

import { Routes } from 'navigation';
import ErrorBoundary from 'containers/errorBoundary';

function EntryPoint(): React.ReactElement {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </Provider>
  );
}

export default EntryPoint;
