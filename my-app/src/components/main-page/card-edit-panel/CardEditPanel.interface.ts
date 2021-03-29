import { Movie } from "../../../store/mainPage/state";

export interface CardEditPanelProps {
  showPanel: boolean;
  toggleShowPanel: () => void;
  card: Movie;
  deleteMovieRequest: (id: number) => Promise<void>;
  putMovieRequest: () => Promise<void>;
  saveSelectedMovie: (movie: Movie) => void;
  resetMovieForm: () => void;
}

export interface EditPanelWrapperProps {
  showPanel: boolean;
}
