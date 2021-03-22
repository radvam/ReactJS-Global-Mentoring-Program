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
    default: {
      return state;
    }
  }
};
