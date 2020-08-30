import store from './configureStore';
import rootReducer from './rootReducer';

export type StoreDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
