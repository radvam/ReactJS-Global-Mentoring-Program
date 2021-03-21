import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import * as actionTypes from "./actionTypes";
import * as interfaces from "./interfaces";

import { AppState } from "../appState";

import { getMovies } from "./services";

export const requestMoviesStart = (): interfaces.RequestStart => ({
  type: actionTypes.REQUEST_MOVIES_START,
});

export const requestMoviesError = (error: string): interfaces.RequestError => ({
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
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
): Promise<void> => {
  dispatch(requestMoviesStart());
  
  const searchParams = {
    ...params,
    limit: 12,
  };

  return getMovies(searchParams)
    .then((response) => {
      dispatch(recordMoviesDataToStore(response.data));
    })
    .catch((error) => {
      dispatch(requestMoviesError(error));
    });
};
