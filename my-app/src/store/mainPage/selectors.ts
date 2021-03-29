import { createSelector } from "reselect";
import { AppState } from "../appState";
import { Movie } from "./state";

const getMoviesData = (state: AppState): Movie[] => state.mainPage.moviesData;
export const getMoviesDataSelector = createSelector(
  getMoviesData,
  (data) => data
);

const getMoviesLoading = (state: AppState): boolean =>
  state.mainPage.moviesLoading;
export const getMovieLoadingSelector = createSelector(
  getMoviesLoading,
  (value) => value
);

const getFilterValue = (state: AppState): string => state.mainPage.filter;
export const getFilterValueSelector = createSelector(
  getFilterValue,
  (value) => value
);

const getSortValue = (state: AppState): string => state.mainPage.sortBy;
export const getSortValueSelector = createSelector(
  getSortValue,
  (value) => value
);

const sortDescendingValue = (state: AppState): boolean =>
  state.mainPage.sortDescending;
export const sortDescValueSelector = createSelector(
  sortDescendingValue,
  (value) => value
);

const getMovieForm = (state: AppState) => state.mainPage.movieForm;
export const getMovieFormSelector = createSelector(
  getMovieForm,
  (value) => value
);

const gerSelectedMovie = (state: AppState) =>
  state.mainPage.selectedMovie;
export const gerSelectedMovieSelector = createSelector(
  gerSelectedMovie,
  (value) => value
);
