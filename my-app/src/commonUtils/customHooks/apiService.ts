import axios, { AxiosResponse } from "axios";

import { composeQueryString } from "../composeQueryString";

const get = (
  url: string,
  params?: Record<string, any> | Array<string | number>,
  headers?: Record<string, any>
): Promise<AxiosResponse> => {
  const uri = `${url}${composeQueryString(params)}`;
  return axios.get(uri, { headers });
};
const post = (
  url: string,
  data?: Record<string, any> | Array<string | number>,
  headers?: Record<string, any>
): Promise<AxiosResponse> => axios.post(url, data, { headers });
const put = (
  url: string,
  data: Record<string, any>,
  headers?: Record<string, any>
): Promise<AxiosResponse> => axios.put(url, data, { headers });
const del = (url: string, data?: Record<string, any>): Promise<AxiosResponse> =>
  axios.delete(url, data);

export const apiService = {
  get,
  post,
  put,
  del,
};
