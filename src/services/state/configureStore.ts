import { compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import rootReducer from './rootReducer';

/* ------------- Redux Configuration ------------- */
const middleware = [reduxThunk];

/* ------------- Redux Development Tools ----------- */
let composeEnhancers = compose;

// Remote Redux Devtools
if (process.env.NODE_ENV !== 'production') {
  composeEnhancers = composeWithDevTools({
    name: 'TS Architecture',
  });
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;
