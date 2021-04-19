export interface HeaderMovieProps {
  getMovieDataRequest: (id: number) => Promise<void>;
  resetMainPageState: () => void;
  slugId: number;
  movieError: string;
  resetMovieDetailsPageState: () => void;
}
