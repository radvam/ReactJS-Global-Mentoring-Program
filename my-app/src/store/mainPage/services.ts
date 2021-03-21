import { apiService } from "../../commonUtils/customHooks/apiService";
import { AxiosResponse } from "axios";
import { MOVIES_URL } from "../../endpoints";

export const getMovies = (
  params?: Record<string, string | boolean | number>
): Promise<AxiosResponse> => apiService.get(MOVIES_URL, params);
