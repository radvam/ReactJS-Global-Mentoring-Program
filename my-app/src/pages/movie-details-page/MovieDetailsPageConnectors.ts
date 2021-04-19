import { connect } from "react-redux";
import { AppState } from "../../store/appState";

import { HeaderMovie } from "../../components/movie-details-page/header-movie/HeaderMovie";
import { MovieContent } from "../../components/movie-details-page/movie-content/MovieContent";

import {
  getMovieDataRequest,
  resetMovieDetailsPageState,
} from "../../store/movieDetailsPage/actions";
import { resetMainPageState } from "../../store/mainPage/actions";
import {
  getMovieDataSelector,
  getMovieLoadingSelector,
  getMovieErrorSelector,
} from "../../store/movieDetailsPage/selectors";

export const HeaderMovieConnected = connect(
  (state: AppState) => ({
    movieError: getMovieErrorSelector(state),
  }),
  {
    getMovieDataRequest,
    resetMainPageState,
    resetMovieDetailsPageState,
  }
)(HeaderMovie);

export const MovieContentConnected = connect(
  (state: AppState) => ({
    movie: getMovieDataSelector(state),
    movieLoading: getMovieLoadingSelector(state),
  }),
  null
)(MovieContent);
