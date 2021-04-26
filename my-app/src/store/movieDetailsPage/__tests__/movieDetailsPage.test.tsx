import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { store } from "../../appState";

import {
  movieDetailsPageReducer,
  movieDetailsPageInitialState,
} from "../reducer";
import {
  REQUEST_MOVIE_START,
  REQUEST_MOVIE_ERROR,
  RECORD_MOVIE_DATA_TO_STORE,
  RESET_MOVIE_DETAILS_PAGE_STATE,
} from "../actionTypes";

import * as interfaces from "../interfaces";
import {
  getMovieDataRequest,
  requestMovieStart,
  requestMovieError,
  recordMovieDataToStore,
  resetMovieDetailsPageState,
} from "../actions";
import { MOVIES_URL } from "../../../endpoints";

const state = store.getState();
const movieId = 338970;
const error = "Ooops. Something was wrong";
const movie = {
  id: 338970,
  title: "Tomb Raider",
  tagline: "Her legend begins",
  vote_average: 6.2,
  vote_count: 817,
  release_date: "2018-03-08",
  poster_path:
    "https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
  overview:
    "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
  budget: 94000000,
  revenue: 126025000,
  genres: ["Action", "Adventure"],
  runtime: 118,
};

describe("Actions:", () => {
  let fakeAxios: any;
  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
  });

  describe("Get movie request:", () => {
    test("it should record movie on success", async () => {
      const data = movie;

      fakeAxios.onGet(`${MOVIES_URL}/${movieId}`).reply(200, data);
      const requestMovieStart = jest.fn();
      const recordMovieDataToStore = jest.fn();

      await getMovieDataRequest(movieId);

      setTimeout(() => {
        expect(requestMovieStart).toHaveBeenCalledTimes(1);
        expect(recordMovieDataToStore).toHaveBeenCalledWith(data);
      });
    });

    test("it should record error message on error", async () => {
      fakeAxios.onGet(`${MOVIES_URL}/${movieId}`).reply(500, error);
      const requestMovieStart = jest.fn();
      const requestMovieError = jest.fn();

      await getMovieDataRequest(movieId);

      setTimeout(() => {
        expect(requestMovieStart).toHaveBeenCalledTimes(1);
        expect(requestMovieError).toHaveBeenCalledWith(error);
      });
    });
  });

  test("should create requestMovieStart action", () => {
    const expectedAction: interfaces.RequestMovieStart = {
      type: REQUEST_MOVIE_START,
    };

    expect(requestMovieStart()).toEqual(expectedAction);
  });

  test("should create requestMovieError action", () => {
    const expectedAction: interfaces.RequestMovieError = {
      type: REQUEST_MOVIE_ERROR,
      error,
    };

    expect(requestMovieError(error)).toEqual(expectedAction);
  });

  test("should create recordMovieDataToStore action", () => {
    const movieData = movie;

    const expectedAction: interfaces.RecordMovieDataToStore = {
      type: RECORD_MOVIE_DATA_TO_STORE,
      movieData,
    };

    expect(recordMovieDataToStore(movieData)).toEqual(expectedAction);
  });

  test("should create resetMovieDetailsPageState action", () => {
    const expectedAction: interfaces.ResetMovieDetailsPageState = {
      type: RESET_MOVIE_DETAILS_PAGE_STATE,
    };

    expect(resetMovieDetailsPageState()).toEqual(expectedAction);
  });
});

describe("Reducers:", () => {
  test("loading should be true", () => {
    const expectedState = movieDetailsPageReducer(
      movieDetailsPageInitialState,
      {
        type: REQUEST_MOVIE_START,
      }
    );

    expect(expectedState.movieLoading).toEqual(true);
    expect(expectedState.movieError).toBeFalsy();
  });

  test("should return error", () => {
    const expectedState = movieDetailsPageReducer(
      movieDetailsPageInitialState,
      {
        type: REQUEST_MOVIE_ERROR,
        error,
      }
    );

    expect(expectedState.movieError).toEqual(error);
    expect(expectedState.movieLoading).toBeFalsy();
  });

  test("should record movie data to the store", () => {
    const movieData = movie;
    const dataInStore = {
      movieData,
      movieError: "",
      movieLoading: false,
    };

    const expectedState = movieDetailsPageReducer(
      movieDetailsPageInitialState,
      {
        type: RECORD_MOVIE_DATA_TO_STORE,
        movieData,
      }
    );

    expect(expectedState).toEqual(dataInStore);
  });

  test("should reset movieDetailsPage state", () => {
    const expectedState = movieDetailsPageReducer(
      movieDetailsPageInitialState,
      {
        type: RESET_MOVIE_DETAILS_PAGE_STATE,
      }
    );

    expect(expectedState).toEqual(movieDetailsPageInitialState);
  });
});
