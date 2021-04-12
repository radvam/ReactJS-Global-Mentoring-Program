import * as actionTypes from "./actionTypes";
import { Movie } from "../mainPage/state";

export interface RequestMovieStart {
  type: typeof actionTypes.REQUEST_MOVIE_START;
}

export interface RequestMovieError {
  type: typeof actionTypes.REQUEST_MOVIE_ERROR;
  error: string;
}

export interface RecordMovieDataToStore {
  type: typeof actionTypes.RECORD_MOVIE_DATA_TO_STORE;
  movieData: Movie;
}

export type MovieDetailsPageActionsTypes =
  | RequestMovieStart
  | RequestMovieError
  | RecordMovieDataToStore;
