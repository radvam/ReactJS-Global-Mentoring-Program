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
  state.mainPage.moviesLoading;
export const getMovieLoadingSelector = createSelector(
  getMovieLoading,
  (value) => value
);
