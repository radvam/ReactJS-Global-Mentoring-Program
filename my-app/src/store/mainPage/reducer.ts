import * as actionTypes from "./actionTypes";
import { MainPageActionsTypes } from "./interfaces";
import { MainPageState } from "./state";

export const mainPageInitialState: MainPageState = {
  moviesLoading: false,
  moviesError: "",
  moviesData: [],
  filter: "all",
  sortBy: "release date",
  sortDescending: true,
  movieForm: {},
};

export const mainPageReducer = (
  state = mainPageInitialState,
  action: MainPageActionsTypes
): MainPageState => {
  switch (action.type) {
    case actionTypes.REQUEST_MOVIES_START: {
      return {
        ...state,
        moviesLoading: true,
      };
    }
    case actionTypes.REQUEST_MOVIES_ERROR: {
      return {
        ...state,
        moviesError: action.error,
        moviesLoading: false,
      };
    }
    case actionTypes.RECORD_MOVIES_DATA_TO_STORE: {
      return {
        ...state,
        moviesData: action.moviesData.data,
        moviesLoading: false,
      };
    }
    case actionTypes.SAVE_FILTER_VALUE: {
      return {
        ...state,
        filter: action.value,
      };
    }
    case actionTypes.SAVE_SORT_VALUE: {
      return {
        ...state,
        sortBy: action.value,
      };
    }
    case actionTypes.TOGGLE_SORT_ARROW: {
      return {
        ...state,
        sortDescending: !state.sortDescending,
      };
    }
    case actionTypes.RESET_MAIN_PAGE_STATE: {
      return {
        ...mainPageInitialState,
      };
    }
    case actionTypes.SET_FORM_TITLE: {
      return {
        ...state,
        movieForm: { ...state.movieForm, title: action.title },
      };
    }
    case actionTypes.SET_FORM_DATE: {
      return {
        ...state,
        movieForm: { ...state.movieForm, release_date: action.date },
      };
    }
    case actionTypes.SET_FORM_URL: {
      return {
        ...state,
        movieForm: { ...state.movieForm, poster_path: action.url },
      };
    }
    case actionTypes.SET_FORM_GENRES: {
      return {
        ...state,
        movieForm: { ...state.movieForm, genres: action.genres },
      };
    }
    case actionTypes.SET_FORM_OVERVIEW: {
      return {
        ...state,
        movieForm: { ...state.movieForm, overview: action.overview },
      };
    }
    case actionTypes.SET_FORM_RUNTIME: {
      return {
        ...state,
        movieForm: { ...state.movieForm, runtime: action.runtime },
      };
    }
    case actionTypes.SAVE_SELECTED_MOVIE: {
      return {
        ...state,
        selectedMovie: action.movie,
      };
    }
    case actionTypes.RESET_MOVIE_FORM: {
      return {
        ...state,
        movieForm: {},
      };
    }
    case actionTypes.SAVE_SEARCH_PARAMS: {
      return {
        ...state,
        searchParams: action.params,
      };
    }
    default: {
      return state;
    }
  }
};
