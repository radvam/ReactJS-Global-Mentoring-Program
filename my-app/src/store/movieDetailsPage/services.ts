import { apiService } from "../../commonUtils/customHooks/apiService";
import { AxiosResponse } from "axios";
import { MOVIES_URL } from "../../endpoints";

export const getMovie = (
  id: number
): Promise<AxiosResponse> => apiService.get(`${MOVIES_URL}/${id}`);
