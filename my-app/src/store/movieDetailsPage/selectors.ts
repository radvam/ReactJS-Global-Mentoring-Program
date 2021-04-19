import { createSelector } from "reselect";
import { AppState } from "../appState";
import { Movie } from "../mainPage/state";

const getMovieData = (state: AppState): Movie =>
  state.movieDetailsPage.movieData;
export const getMovieDataSelector = createSelector(
  getMovieData,
  (data) => data
);

const getMovieLoading = (state: AppState): boolean =>
  state.movieDetailsPage.movieLoading;
export const getMovieLoadingSelector = createSelector(
  getMovieLoading,
  (value) => value
);

const getMovieError = (state: AppState): string =>
  state.movieDetailsPage.movieError;
export const getMovieErrorSelector = createSelector(
  getMovieError,
  (value) => value
);
