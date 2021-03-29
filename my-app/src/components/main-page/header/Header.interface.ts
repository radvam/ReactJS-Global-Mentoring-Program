export interface HeaderProps {
  getMoviesDataRequest: (
    params?: Record<string, string | number | boolean> | undefined
  ) => Promise<void>;
  postMovieRequest: () => Promise<void>;
  resetMovieForm: () => void;
}
