import { connect } from "react-redux";
import { AppState } from "../../store/appState";

import { MainContent } from "../../components/main-page/main-content/MainContent";
import { Header } from "../../components/main-page/header/Header";

import {
  getMoviesDataSelector,
  getMovieLoadingSelector,
} from "../../store/mainPage/selectors";

import { getMoviesDataRequest } from "../../store/mainPage/actions";

export const MainContentConnected = connect(
  (state: AppState) => ({
    movies: getMoviesDataSelector(state),
    loading: getMovieLoadingSelector(state),
  }),
  {
    getMoviesDataRequest,
  }
)(MainContent);

export const HeaderConnected = connect(null, {
  getMoviesDataRequest,
})(Header);
