import {
    QueryFunctionContext,
    useQuery,
    UseQueryOptions,
  } from 'react-query';
import api from '../helpers/default';

type QueryKeyT = [string, object | undefined];

export const fetcher = async <T>({
    queryKey,
    pageParam,
  }: QueryFunctionContext<QueryKeyT>): Promise<T> => {
    const [url, params] = queryKey;
    return api
      .get<T>(url, { params: { ...params, pageParam } })
      .then((res) => res.data);
  };

export const useFetch = <T>(
    url: string | null,
    params?: object,
    config?: UseQueryOptions<T, Error, T, QueryKeyT>
  ) => {
    const context = useQuery<T, Error, T, QueryKeyT>(
      [url!, params],
      ({ queryKey }) => fetcher({ queryKey, meta: undefined }),
      {
        enabled: !!url,
        ...config,
      }
    );
  
    return context;
  };