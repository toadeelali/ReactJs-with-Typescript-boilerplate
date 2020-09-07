import { useSelector, TypedUseSelectorHook } from 'react-redux';
import rootReducer from './rootReducer';

type RootState = ReturnType<typeof rootReducer>;

const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useStoreSelector;
