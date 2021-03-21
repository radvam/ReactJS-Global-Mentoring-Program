import * as actionTypes from "./actionTypes";
import { MainPageActionsTypes } from "./interfaces";
import { MainPageState } from "./state";

export const mainPageInitialState: MainPageState = {
  moviesLoading: false,
  moviesError: "",
  moviesData: [],
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
    default: {
      return state;
    }
  }
};
