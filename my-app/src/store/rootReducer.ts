import { combineReducers } from "redux";

import { mainPageReducer } from "./mainPage/reducer";
import { movieDetailsPageReducer } from "./movieDetailsPage/reducer";

export const rootReducer = combineReducers({
  mainPage: mainPageReducer,
  movieDetailsPage: movieDetailsPageReducer,
});
