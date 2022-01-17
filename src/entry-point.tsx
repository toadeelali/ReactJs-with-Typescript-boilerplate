import React from 'react';
import { Provider } from 'react-redux';
import store from 'services/state/configureStore';

import { RouteController } from 'navigation';
import ErrorBoundary from 'containers/error-boundary';
import { SidebarProvider } from 'services';

function EntryPoint(): React.ReactElement {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <SidebarProvider>
          <RouteController />
        </SidebarProvider>
      </ErrorBoundary>
    </Provider>
  );
}

export default EntryPoint;
