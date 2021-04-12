import { useLocation } from 'react-router-dom';

export const useQuery = (): URLSearchParams => new URLSearchParams(useLocation().search);

export const getUrlSearchParams = (query: URLSearchParams | any): Record<string, string> => {
  const params: Record<string, string> = {};

  for (const [key, value] of query) {
    params[key] = value;
  }

  return params;
};
