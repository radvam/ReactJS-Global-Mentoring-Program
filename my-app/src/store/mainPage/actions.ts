import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import * as actionTypes from "./actionTypes";
import * as interfaces from "./interfaces";

import { prepareParamsObject } from "./utils/mainPageUtils";

import { AppState } from "../appState";

import { getMovies, delMovie } from "./services";

export const requestMoviesStart = (): interfaces.RequestMoviesStart => ({
  type: actionTypes.REQUEST_MOVIES_START,
});

export const requestMoviesError = (
  error: string
): interfaces.RequestMoviesError => ({
  type: actionTypes.REQUEST_MOVIES_ERROR,
  error,
});

export const recordMoviesDataToStore = (
  moviesData: interfaces.MoviesData
): interfaces.RecordMoviesDataToStore => ({
  type: actionTypes.RECORD_MOVIES_DATA_TO_STORE,
  moviesData,
});

export const getMoviesDataRequest = (
  params?: Record<string, string | number | boolean> | undefined
) => (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>,
  getState: () => AppState
): Promise<void> => {
  dispatch(requestMoviesStart());

  const navBarParams = prepareParamsObject(getState().mainPage);

  const searchParams = {
    limit: 12,
    ...navBarParams,
    ...params,
  };

  return getMovies(searchParams)
    .then((response) => {
      dispatch(recordMoviesDataToStore(response.data));
    })
    .catch((error) => {
      dispatch(requestMoviesError(error));
    });
};

export const saveFilterValue = (value: string): interfaces.SaveFilterValue => ({
  type: actionTypes.SAVE_FILTER_VALUE,
  value,
});

export const saveSortValue = (value: string): interfaces.SaveSortValue => ({
  type: actionTypes.SAVE_SORT_VALUE,
  value,
});

export const toggleSortArrow = (): interfaces.ToggleSortArrow => ({
  type: actionTypes.TOGGLE_SORT_ARROW,
});

export const resetMainPageState = (): interfaces.ResetMainPageState => ({
  type: actionTypes.RESET_MAIN_PAGE_STATE,
});

export const deleteMovieRequest = (id: number) => (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
): Promise<void> =>
  delMovie(id)
    .then(() => {
      dispatch(getMoviesDataRequest());
    })
    .catch((error) => {
      dispatch(requestMoviesError(error));
    });
