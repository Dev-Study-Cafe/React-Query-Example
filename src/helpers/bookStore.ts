import { ApiRoutes } from '../constants';
import { useFetch } from '../hooks/useReactQuery';

export const useGetBookStoreList = () => {
  const context = useFetch<any>(
    ApiRoutes.GET_BOOK_STORE_LIST(),
    undefined,
    { retry: false, enabled: true, refetchInterval: false }
  );
  
  return context;
}