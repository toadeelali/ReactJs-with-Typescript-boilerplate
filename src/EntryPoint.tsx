import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'services/state';

import Root from 'containers/Root';

function EntryPoint(): React.ReactElement {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default EntryPoint;
