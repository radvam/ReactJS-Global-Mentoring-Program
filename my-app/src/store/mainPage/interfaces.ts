import * as actionTypes from "./actionTypes";
import { Movie } from "./state";

export interface RequestMoviesStart {
  type: typeof actionTypes.REQUEST_MOVIES_START;
}

export interface RequestMoviesError {
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

export interface SaveFilterValue {
  type: typeof actionTypes.SAVE_FILTER_VALUE;
  value: string;
}

export interface SaveSortValue {
  type: typeof actionTypes.SAVE_SORT_VALUE;
  value: string;
}

export interface ToggleSortArrow {
  type: typeof actionTypes.TOGGLE_SORT_ARROW;
}

export interface ResetMainPageState {
  type: typeof actionTypes.RESET_MAIN_PAGE_STATE;
}

export type MainPageActionsTypes =
  | RequestMoviesStart
  | RequestMoviesError
  | RecordMoviesDataToStore
  | SaveFilterValue
  | SaveSortValue
  | ToggleSortArrow
  | ResetMainPageState;
