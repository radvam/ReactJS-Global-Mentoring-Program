import { Movie } from "../mainPage/state";

export interface MovieDetailsPageState {
  movieLoading: boolean;
  movieError: string;
  movieData: Movie;
}
