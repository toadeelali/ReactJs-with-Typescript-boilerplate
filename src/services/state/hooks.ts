import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from './types';

const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useStoreSelector;
