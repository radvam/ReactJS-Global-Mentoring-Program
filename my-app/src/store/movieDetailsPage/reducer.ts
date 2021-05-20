import * as actionTypes from "./actionTypes";
import { MovieDetailsPageActionsTypes } from "./interfaces";
import { MovieDetailsPageState } from "./state";

export const movieDetailsPageInitialState: MovieDetailsPageState = {
  movieLoading: false,
  movieError: "",
  movieData: {
    id: 1,
    title: "",
    tagline: "",
    vote_average: 1,
    vote_count: 1,
    release_date: "",
    poster_path: "",
    overview: "",
    budget: 1,
    revenue: 1,
    genres: ["", ""],
    runtime: 1,
  },
};

export const movieDetailsPageReducer = (
  state = movieDetailsPageInitialState,
  action: MovieDetailsPageActionsTypes
): MovieDetailsPageState => {
  switch (action.type) {
    case actionTypes.REQUEST_MOVIE_START: {
      return {
        ...state,
        movieLoading: true,
      };
    }
    case actionTypes.REQUEST_MOVIE_ERROR: {
      return {
        ...state,
        movieError: action.error.toString(),
        movieLoading: false,
      };
    }
    case actionTypes.RECORD_MOVIE_DATA_TO_STORE: {
      return {
        ...state,
        movieData: action.movieData,
        movieLoading: false,
      };
    }
    case actionTypes.RESET_MOVIE_DETAILS_PAGE_STATE: {
      return {
        ...movieDetailsPageInitialState,
      };
    }
    default: {
      return state;
    }
  }
};
