import { Action, applyMiddleware, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './rootReducer';
import { MainPageState } from './mainPage/state';

export interface AppState {
  mainPage: MainPageState;
}

const initialState: AppState = {
  mainPage: {
    moviesLoading: false,
    moviesError: '',
    moviesData: [],
  },
};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  typeof store,
  null,
  Action<string>
>;
