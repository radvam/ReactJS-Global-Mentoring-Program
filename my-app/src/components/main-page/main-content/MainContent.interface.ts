import { Movie } from "../../../store/mainPage/state";

export interface MainContentProps {
  getMoviesDataRequest: (
    params?: Record<string, string | number | boolean> | undefined
  ) => Promise<void>;
  movies: Movie[];
  loading: boolean;
  filterValue: string;
  sortValue: string;
  sortOrder: boolean;
}
