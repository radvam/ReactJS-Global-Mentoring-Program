import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import * as actionTypes from "./actionTypes";
import * as interfaces from "./interfaces";

import {
  prepareParamsObject,
  prepareMovieForRequest,
} from "./utils/mainPageUtils";
import { notice } from "../../commonUtils/notifications";
import {
  SUCCESS_ADD_MESSAGE,
  ERROR_ADD_MESSAGE,
  SUCCESS_EDIT_MESSAGE,
  ERROR_EDIT_MESSAGE,
  SUCCESS_DELETE_MESSAGE,
  ERROR_DELETE_MESSAGE,
} from "../../constants/mainPageConstants";

import { gerSelectedMovieSelector, getMovieFormSelector } from "./selectors";
import { getMovieDataRequest } from "../movieDetailsPage/actions";

import { Movie } from "./state";
import { AppState } from "../appState";

import { getMovies, delMovie, addMovie, editMovie } from "./services";

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

//Get movies
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

//Delete movie
export const deleteMovieRequest = (id: number) => (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
): Promise<void> =>
  delMovie(id)
    .then(() => {
      dispatch(getMoviesDataRequest());
      notice.success(SUCCESS_DELETE_MESSAGE);
    })
    .catch(() => {
      notice.error(ERROR_DELETE_MESSAGE);
    });

//Movie form
export const setFormTitle = (title: string): interfaces.SetFormTitle => ({
  type: actionTypes.SET_FORM_TITLE,
  title,
});

export const setFormDate = (date: string): interfaces.SetFormDate => ({
  type: actionTypes.SET_FORM_DATE,
  date,
});

export const setFormUrl = (url: string): interfaces.SetFormUrl => ({
  type: actionTypes.SET_FORM_URL,
  url,
});

export const setFormGenres = (genres: string[]): interfaces.SetFormGenres => ({
  type: actionTypes.SET_FORM_GENRES,
  genres,
});

export const setFormOverview = (
  overview: string
): interfaces.SetFormOverview => ({
  type: actionTypes.SET_FORM_OVERVIEW,
  overview,
});

export const setFormRuntime = (runtime: number): interfaces.SetFormRuntime => ({
  type: actionTypes.SET_FORM_RUNTIME,
  runtime,
});

export const resetMovieForm = (): interfaces.ResetMovieForm => ({
  type: actionTypes.RESET_MOVIE_FORM,
});

//Add movie
export const postMovieRequest = () => (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>,
  getState: () => AppState
): Promise<void> => {
  const movieForm = getMovieFormSelector(getState());
  const movie = {
    vote_average: 0,
    vote_count: 9,
    budget: 0,
    revenue: 0,
    ...movieForm,
  };

  return addMovie(movie)
    .then(() => {
      dispatch(getMoviesDataRequest());
      notice.success(SUCCESS_ADD_MESSAGE);
    })
    .catch(() => {
      notice.error(ERROR_ADD_MESSAGE);
    });
};

//Edit movie
export const putMovieRequest = () => (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>,
  getState: () => AppState
): Promise<void> => {
  const movieForm = getMovieFormSelector(getState());
  const movie = gerSelectedMovieSelector(getState());
  const resultMovie = prepareMovieForRequest(movie, movieForm);

  return editMovie(resultMovie)
    .then(() => {
      dispatch(getMoviesDataRequest());
      dispatch(getMovieDataRequest(resultMovie.id));
      notice.success(SUCCESS_EDIT_MESSAGE);
    })
    .catch(() => {
      notice.error(ERROR_EDIT_MESSAGE);
    });
};

export const saveSelectedMovie = (
  movie: Movie
): interfaces.SaveSelectedMovie => ({
  type: actionTypes.SAVE_SELECTED_MOVIE,
  movie,
});
