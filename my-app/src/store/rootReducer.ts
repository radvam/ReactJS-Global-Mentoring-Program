import { combineReducers } from "redux";

import { mainPageReducer } from "./mainPage/reducer";

export const rootReducer = combineReducers({
  mainPage: mainPageReducer,
});
