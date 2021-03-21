import * as actionTypes from "./actionTypes";
import { Movie } from "./state";

export interface RequestStart {
  type: typeof actionTypes.REQUEST_MOVIES_START;
}

export interface RequestError {
  type: typeof actionTypes.REQUEST_MOVIES_ERROR;
  error: string;
}

export interface MoviesData {
  totalAmount: number;
  offset: number;
  limit: number;
  data: Movie[];
}

export interface RecordMoviesDataToStore {
  type: typeof actionTypes.RECORD_MOVIES_DATA_TO_STORE;
  moviesData: MoviesData;
}

export type MainPageActionsTypes =
  | RequestStart
  | RequestError
  | RecordMoviesDataToStore;
