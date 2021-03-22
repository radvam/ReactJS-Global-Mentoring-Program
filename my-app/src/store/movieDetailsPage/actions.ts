import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import * as actionTypes from "./actionTypes";
import * as interfaces from "./interfaces";

import { Movie } from "../mainPage/state";

import { AppState } from "../appState";

import { getMovie } from "./services";

export const requestMovieStart = (): interfaces.RequestMovieStart => ({
  type: actionTypes.REQUEST_MOVIE_START,
});

export const requestMovieError = (error: string): interfaces.RequestMovieError => ({
  type: actionTypes.REQUEST_MOVIE_ERROR,
  error,
});

export const recordMovieDataToStore = (
  movieData: Movie
): interfaces.RecordMovieDataToStore => ({
  type: actionTypes.RECORD_MOVIE_DATA_TO_STORE,
  movieData,
});

export const getMovieDataRequest = (id: number) => (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
): Promise<void> => {
  dispatch(requestMovieStart());

  return getMovie(id)
    .then((response) => {
      console.log(response);
      dispatch(recordMovieDataToStore(response.data));
    })
    .catch((error) => {
      dispatch(requestMovieError(error));
    });
};
