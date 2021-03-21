import { createSelector } from 'reselect';
import { AppState } from '../appState';
import { Movie } from './state';

const getMoviesData = (state: AppState): Movie[] => state.mainPage.moviesData;
export const getMoviesDataSelector = createSelector(getMoviesData, data => data);

const getMoviesLoading = (state: AppState): boolean => state.mainPage.moviesLoading;
export const getMovieLoadingSelector = createSelector(getMoviesLoading, value => value);
