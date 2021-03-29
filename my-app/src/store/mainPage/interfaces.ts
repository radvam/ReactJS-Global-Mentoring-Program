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

export interface SetFormTitle {
  type: typeof actionTypes.SET_FORM_TITLE;
  title: string;
}

export interface SetFormDate {
  type: typeof actionTypes.SET_FORM_DATE;
  date: string;
}

export interface SetFormUrl {
  type: typeof actionTypes.SET_FORM_URL;
  url: string;
}

export interface SetFormGenres {
  type: typeof actionTypes.SET_FORM_GENRES;
  genres: string[];
}

export interface SetFormOverview {
  type: typeof actionTypes.SET_FORM_OVERVIEW;
  overview: string;
}

export interface SetFormRuntime {
  type: typeof actionTypes.SET_FORM_RUNTIME;
  runtime: number;
}

export interface SaveSelectedMovie {
  type: typeof actionTypes.SAVE_SELECTED_MOVIE;
  movie: Movie;
}

export interface ResetMovieForm {
  type: typeof actionTypes.RESET_MOVIE_FORM;
}

export type MainPageActionsTypes =
  | RequestMoviesStart
  | RequestMoviesError
  | RecordMoviesDataToStore
  | SaveFilterValue
  | SaveSortValue
  | ToggleSortArrow
  | ResetMainPageState
  | SetFormTitle
  | SetFormDate
  | SetFormUrl
  | SetFormGenres
  | SetFormOverview
  | SetFormRuntime
  | ResetMovieForm
  | SaveSelectedMovie;
  