import { apiService } from "../../commonUtils/customHooks/apiService";
import { AxiosResponse } from "axios";
import { MOVIES_URL } from "../../endpoints";

export const getMovies = (
  params?: Record<string, string | boolean | number>
): Promise<AxiosResponse> => apiService.get(MOVIES_URL, params);

export const delMovie = (id: number): Promise<AxiosResponse> =>
  apiService.del(`${MOVIES_URL}/${id}`);
